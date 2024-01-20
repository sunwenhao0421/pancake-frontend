import { ChainId } from '@mixmarvelswap/chains'
import { WETH9 } from '@mixmarvelswap/sdk'
import { USDT } from './common'

export const mantleTokens = {
  weth: WETH9[ChainId.MANTLE],
  usdt: USDT[ChainId.MANTLE],
}
