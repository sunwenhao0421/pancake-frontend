import { WETH9 } from '@mixmarvelswap/sdk'
import { ChainId } from '@mixmarvelswap/chains'
import { USDC } from './common'

export const scrollSepoliaTokens = {
  weth: WETH9[ChainId.SCROLL_SEPOLIA],
  usdc: USDC[ChainId.SCROLL_SEPOLIA],
}
