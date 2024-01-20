import { ChainId } from '@mixmarvelswap/chains'
import { Address } from 'viem'
import { SupportedChainId } from './constants/supportedChains'
import { ContractAddresses } from './type'

export const galetoOracleETH: Record<string, Address> = {
  [ChainId.BSC]: '0x',
  [ChainId.ZKSYNC]: '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
} as const satisfies ContractAddresses<SupportedChainId>
