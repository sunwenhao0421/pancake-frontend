import { Token } from '@mixmarvelswap/sdk'
import { ChainId } from '@mixmarvelswap/chains'

import { usdGasTokensByChain } from '../../constants'

export function getUsdGasToken(chainId: ChainId): Token | null {
  return usdGasTokensByChain[chainId]?.[0] ?? null
}
