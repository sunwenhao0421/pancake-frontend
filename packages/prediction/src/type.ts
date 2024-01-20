import { ChainId } from '@mixmarvelswap/chains'
import { Token } from '@mixmarvelswap/sdk'
import { Address } from 'viem'
import { SupportedChainId } from './constants/supportedChains'

export enum PredictionSupportedSymbol {
  BNB = 'BNB',
  CAKE = 'CAKE',
  ETH = 'ETH',
}

export enum BetPosition {
  BULL = 'Bull',
  BEAR = 'Bear',
  HOUSE = 'House',
}

export enum PredictionStatus {
  INITIAL = 'initial',
  LIVE = 'live',
  PAUSED = 'paused',
  ERROR = 'error',
}

export enum PredictionsChartView {
  TradingView = 'TradingView',
  Chainlink = 'Chainlink Oracle',
}

export interface PredictionConfig {
  isNativeToken: boolean
  address: Address
  api: string
  chainlinkOracleAddress?: Address // All EVM chain are using chainlink oracle, but not include zkSync chain.
  galetoOracleAddress?: Address // Only zkSync chain use galeto oracle.
  displayedDecimals: number
  token: Token
  tokenBackgroundColor: string // For selector svg token for prediction page.
}

export type ContractAddresses<T extends ChainId = SupportedChainId> = {
  [chainId in T]: Address
}

export type EndPointType<T extends ChainId = SupportedChainId> = {
  [chainId in T]: string
}

export type LeaderboardMinRoundsPlatedType<T extends PredictionSupportedSymbol> = {
  [PredictionSupportedSymbol in T]: number
}
