import { SmartRouter } from '@mixmarvelswap/smart-router/evm'

import { SUPPORTED_CHAINS } from './constants'
import { getPoolsObjectName, getPoolsTvlObjectName } from './pools'
import { v3SubgraphProvider } from './provider'

// eslint-disable-next-line consistent-return
async function handleScheduled(event: ScheduledEvent) {
  switch (event.cron) {
    case '*/30 * * * *':
    case '0 0 * * *': {
      for (const chainId of SUPPORTED_CHAINS) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const pools = await SmartRouter.getAllV3PoolsFromSubgraph({ chainId, provider: v3SubgraphProvider })
          const serializedPools = pools.map((p) => ({
            ...SmartRouter.Transformer.serializePool(p),
            tvlUSD: p.tvlUSD.toString(),
          }))
          const poolsTvl = pools.map((p) => ({
            address: p.address,
            tvlUSD: p.tvlUSD.toString(),
          }))
          // eslint-disable-next-line no-await-in-loop
          await Promise.all([
            SUBGRAPH_POOLS.put(getPoolsObjectName(chainId), JSON.stringify(serializedPools), {
              httpMetadata: {
                contentType: 'application/json',
              },
            }),
            SUBGRAPH_POOLS.put(getPoolsTvlObjectName(chainId), JSON.stringify(poolsTvl), {
              httpMetadata: {
                contentType: 'application/json',
              },
            }),
          ])
        } catch (e) {
          console.error(e)
        }
      }
      break
    }
    default:
      break
  }
}

export function setupPoolBackupCrontab() {
  addEventListener('scheduled', (event) => {
    event.waitUntil(handleScheduled(event))
  })
}
