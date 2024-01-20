import { Token } from '@mixmarvelswap/sdk'
import { ChainId } from '@mixmarvelswap/chains'

// a list of tokens by chain
export type ChainMap<T> = {
  readonly [chainId in ChainId]: T
}

export type ChainTokenList = ChainMap<Token[]>
