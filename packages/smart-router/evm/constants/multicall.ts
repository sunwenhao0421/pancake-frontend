/*
 * @Author: mouse
 * @Date: 2024-01-19 19:57:25
 * @LastEditTime: 2024-01-19 23:56:55
 * @LastEditors: mouse
 * @Description:
 * @FilePath: /pancake-frontend-develop/packages/smart-router/evm/constants/multicall.ts
 * @project:
 */
import { ChainId } from '@mixmarvelswap/chains'

import { BatchMulticallConfigs, ChainMap } from '../types'

const DEFAULT: BatchMulticallConfigs = {
  defaultConfig: {
    gasLimitPerCall: 1_000_000,
  },
  gasErrorFailureOverride: {
    gasLimitPerCall: 2_000_000,
  },
  successRateFailureOverrides: {
    gasLimitPerCall: 2_000_000,
  },
}

export const BATCH_MULTICALL_CONFIGS: ChainMap<BatchMulticallConfigs> = {
  [ChainId.BSC_TESTNET]: DEFAULT,
  [ChainId.BSC]: DEFAULT,
  [ChainId.ETHEREUM]: DEFAULT,
  [ChainId.GOERLI]: DEFAULT,
  [ChainId.ARBITRUM_ONE]: DEFAULT,
  [ChainId.ARBITRUM_GOERLI]: DEFAULT,
  [ChainId.POLYGON_ZKEVM]: {
    defaultConfig: {
      gasLimitPerCall: 500_000,
    },
    gasErrorFailureOverride: {
      gasLimitPerCall: 1_500_000,
    },
    successRateFailureOverrides: {
      gasLimitPerCall: 1_500_000,
    },
  },
  [ChainId.POLYGON_ZKEVM_TESTNET]: {
    defaultConfig: {
      gasLimitPerCall: 500_000,
    },
    gasErrorFailureOverride: {
      gasLimitPerCall: 1_500_000,
    },
    successRateFailureOverrides: {
      gasLimitPerCall: 1_500_000,
    },
  },
  [ChainId.ZKSYNC]: {
    defaultConfig: {
      gasLimitPerCall: 1_000_000,
    },
    gasErrorFailureOverride: {
      gasLimitPerCall: 2_000_000,
    },
    successRateFailureOverrides: {
      gasLimitPerCall: 3_000_000,
    },
  },
  [ChainId.ZKSYNC_TESTNET]: DEFAULT,
  [ChainId.LINEA]: DEFAULT,
  [ChainId.LINEA_TESTNET]: DEFAULT,
  [ChainId.BASE]: {
    ...DEFAULT,
    defaultConfig: {
      ...DEFAULT.defaultConfig,
      dropUnexecutedCalls: true,
    },
  },
  [ChainId.BASE_TESTNET]: DEFAULT,
  [ChainId.OPBNB]: DEFAULT,
  [ChainId.OPBNB_TESTNET]: DEFAULT,
  [ChainId.SCROLL_SEPOLIA]: DEFAULT,
  [ChainId.MANTLE]: DEFAULT,
  [ChainId.MANTLE_TESTNET]: DEFAULT,
}
