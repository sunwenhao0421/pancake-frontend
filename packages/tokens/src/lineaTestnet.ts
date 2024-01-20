import { ChainId } from '@mixmarvelswap/chains'
import { ERC20Token, WETH9 } from '@mixmarvelswap/sdk'
import { CAKE, USDC } from './common'

export const lineaTestnetTokens = {
  weth: WETH9[ChainId.LINEA_TESTNET],
  usdc: USDC[ChainId.LINEA_TESTNET],
  cake: CAKE[ChainId.LINEA_TESTNET],
  mockA: new ERC20Token(ChainId.BASE_TESTNET, '0x6cc56b20bf8C4FfD58050D15AbA2978A745CC691', 18, 'A', 'Mock A'),
}
