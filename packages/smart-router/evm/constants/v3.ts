/*
 * @Author: mouse
 * @Date: 2024-01-19 19:57:25
 * @LastEditTime: 2024-01-19 23:54:27
 * @LastEditors: mouse
 * @Description:
 * @FilePath: /pancake-frontend-develop/packages/smart-router/evm/constants/v3.ts
 * @project:
 */
import { ChainId } from '@mixmarvelswap/chains'
import { Address } from 'viem'

// = 1 << 23 or 100000000000000000000000
export const V2_FEE_PATH_PLACEHOLDER = 8388608

export const MSG_SENDER = '0x0000000000000000000000000000000000000001'
export const ADDRESS_THIS = '0x0000000000000000000000000000000000000002'

export const MIXED_ROUTE_QUOTER_ADDRESSES = {
  [ChainId.ETHEREUM]: '0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86',
  [ChainId.GOERLI]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.BSC]: '0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86',
  [ChainId.BSC_TESTNET]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.ARBITRUM_ONE]: '0x5457fa0318753E9eaC2d17DFfdb6383da207d705',
  [ChainId.ARBITRUM_GOERLI]: '0x805e03325116Da555Babf012C7bd490Bdd6EEa95',
  [ChainId.POLYGON_ZKEVM]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0x9CFCdecF9e37Bf25023A2B42537127c1089600fE',
  [ChainId.ZKSYNC]: '0x9B1edFB3848660402E4f1DC25733764e80aA627A',
  [ChainId.ZKSYNC_TESTNET]: '0x7931c270f59Cb1c2617e87976689bD6803afF50a',
  [ChainId.LINEA]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.LINEA_TESTNET]: '0x7d3ed219e45637Cfa77b1a634d0489a2950d1B7F',
  [ChainId.OPBNB]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.OPBNB_TESTNET]: '0x118F080BF268aa7De4bE6d5e579D926903E7d6Cb',
  [ChainId.BASE]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.BASE_TESTNET]: '0x9d4277f1D41CCB30C0e91f7d1bBA2A739E19032C',
  [ChainId.SCROLL_SEPOLIA]: '0x9d4277f1D41CCB30C0e91f7d1bBA2A739E19032C',
  [ChainId.MANTLE]: '0x9488C05a7b75a6FefdcAE4f11a33467bcBA60177',
  [ChainId.MANTLE_TESTNET]: '0x49C8bb51C6bb791e8D6C31310cE0C14f68492991',
} as const satisfies Record<ChainId, Address>

export const V3_QUOTER_ADDRESSES = {
  [ChainId.ETHEREUM]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.GOERLI]: '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2',
  [ChainId.BSC]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.BSC_TESTNET]: '0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2',
  [ChainId.ARBITRUM_ONE]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.ARBITRUM_GOERLI]: '0xC0F9488345ed89105b3bd135150905F718Bb254E',
  [ChainId.POLYGON_ZKEVM]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0xA9c08a89Be4503E04Fd84Eadad4320eE34e9B11D',
  [ChainId.ZKSYNC]: '0x3d146FcE6c1006857750cBe8aF44f76a28041CCc',
  [ChainId.ZKSYNC_TESTNET]: '0x43e273b4Ffd6bC9d6Be1a862D19893549c3b9b46',
  [ChainId.LINEA]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.LINEA_TESTNET]: '0x669254936caE83bE34008BdFdeeA63C902497B31',
  [ChainId.OPBNB]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.OPBNB_TESTNET]: '0x052a99849Ef2e13a5CB28275862991671D4b6fF5',
  [ChainId.BASE]: '0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997',
  [ChainId.BASE_TESTNET]: '0x6cc56b20bf8C4FfD58050D15AbA2978A745CC691',
  [ChainId.SCROLL_SEPOLIA]: '0x6cc56b20bf8C4FfD58050D15AbA2978A745CC691',
  [ChainId.MANTLE]: '0x9488C05a7b75a6FefdcAE4f11a33467bcBA60177',
  [ChainId.MANTLE_TESTNET]: '0x49C8bb51C6bb791e8D6C31310cE0C14f68492991',
} as const satisfies Record<ChainId, Address>
