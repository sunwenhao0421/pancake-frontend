import { getMessagesBySrcTxHash } from '@layerzerolabs/scan-client'
import { ChainId } from '@mixmarvelswap/sdk'
import { Address } from 'viem'

import { CrossChainMessage } from '../types'
import { getChainIdByLZChainId, getLayerZeroChainId } from '../utils'

type Params = {
  chainId: ChainId
  txHash: string
}

export async function getCrossChainMessage({ chainId, txHash }: Params): Promise<CrossChainMessage> {
  const lzChainId = getLayerZeroChainId(chainId)
  const { messages } = await getMessagesBySrcTxHash(lzChainId, txHash)

  // For now we only need the first message
  if (!messages.length) {
    throw new Error(`No message found for tx: ${txHash} on chain ${chainId}`)
  }
  const [{ status, srcUaAddress, dstUaAddress, srcChainId, dstChainId, dstTxHash, srcUaNonce }] = messages

  return {
    status,
    srcUaAddress: srcUaAddress as Address,
    dstUaAddress: dstUaAddress as Address,
    srcChainId: getChainIdByLZChainId(srcChainId),
    dstChainId: getChainIdByLZChainId(dstChainId),
    dstTxHash,
    srcUaNonce: Number(srcUaNonce),
  }
}
