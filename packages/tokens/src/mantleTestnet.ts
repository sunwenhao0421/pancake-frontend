import { ChainId } from '@mixmarvelswap/chains'
import { WETH9 } from '@mixmarvelswap/sdk'
import { USDT } from './common'

export const mantleTestnetTokens = {
  weth: WETH9[ChainId.MANTLE_TESTNET],
  usdt: USDT[ChainId.MANTLE_TESTNET],
}
