import { lineaTokens } from '@mixmarvelswap/tokens'
import { FeeAmount } from '@mixmarvelswap/v3-sdk'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 12,
    lpAddress: '0x3f63a467C54c96538bD36A7DF1b9E7C4719DcaC9',
    token0: lineaTokens.wstETH,
    token1: lineaTokens.weth,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 11,
    lpAddress: '0x85164B6d8a74bA481AB6D02D2C4e779ECCBAF982',
    token0: lineaTokens.usdc,
    token1: lineaTokens.axlusdc,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 10,
    lpAddress: '0xA48E0630B7b9dCb250112143C9D0fe47d26CB1e4',
    token0: lineaTokens.usdc,
    token1: lineaTokens.dai,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 9,
    lpAddress: '0xbD3bc396C9393e63bBc935786Dd120B17F58Df4c',
    token0: lineaTokens.wbtc,
    token1: lineaTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 8,
    lpAddress: '0x6a72F4F191720c411Cd1fF6A5EA8DeDEC3A64771',
    token0: lineaTokens.usdc,
    token1: lineaTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 7,
    lpAddress: '0xd5539D0360438a66661148c633A9F0965E482845',
    token0: lineaTokens.usdc,
    token1: lineaTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 6,
    lpAddress: '0x3f63a467C54c96538bD36A7DF1b9E7C4719DcaC9',
    token0: lineaTokens.wstETH,
    token1: lineaTokens.weth,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 1,
    lpAddress: '0xd5539D0360438a66661148c633A9F0965E482845',
    token0: lineaTokens.usdc,
    token1: lineaTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 2,
    lpAddress: '0x6a72F4F191720c411Cd1fF6A5EA8DeDEC3A64771',
    token0: lineaTokens.usdc,
    token1: lineaTokens.usdt,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 3,
    lpAddress: '0xbD3bc396C9393e63bBc935786Dd120B17F58Df4c',
    token0: lineaTokens.wbtc,
    token1: lineaTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 4,
    lpAddress: '0xA48E0630B7b9dCb250112143C9D0fe47d26CB1e4',
    token0: lineaTokens.usdc,
    token1: lineaTokens.dai,
    feeAmount: FeeAmount.LOWEST,
  },
  {
    pid: 5,
    lpAddress: '0x85164B6d8a74bA481AB6D02D2C4e779ECCBAF982',
    token0: lineaTokens.usdc,
    token1: lineaTokens.axlusdc,
    feeAmount: FeeAmount.LOWEST,
  },
])
