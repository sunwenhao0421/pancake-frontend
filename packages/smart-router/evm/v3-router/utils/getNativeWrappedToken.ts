import { Token, WNATIVE } from '@mixmarvelswap/sdk'
import { ChainId } from '@mixmarvelswap/chains'

export function getNativeWrappedToken(chainId: ChainId): Token | null {
  return WNATIVE[chainId] ?? null
}
