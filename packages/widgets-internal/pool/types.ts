import BigNumber from "bignumber.js";
import type {
  PoolCategory,
  PoolConfigBaseProps,
  SerializedPoolConfig,
  DeserializedPoolConfig,
  DeserializedPool,
  DeserializedPoolVault,
  DeserializedPoolLockedVault,
  DeserializedLockedVaultUser,
  DeserializedLockedCakeVault,
  SerializedVaultFees,
  DeserializedVaultFees,
  DeserializedVaultUser,
  DeserializedCakeVault,
} from "@mixmarvelswap/pools";
import { VaultKey } from "@mixmarvelswap/pools";

export {
  PoolCategory,
  PoolConfigBaseProps,
  SerializedPoolConfig,
  DeserializedPoolConfig,
  DeserializedPoolVault,
  DeserializedPoolLockedVault,
  DeserializedPool,
  DeserializedLockedVaultUser,
  DeserializedLockedCakeVault,
  SerializedVaultFees,
  DeserializedVaultFees,
  DeserializedVaultUser,
  DeserializedCakeVault,
  VaultKey,
};

export interface HarvestActionsProps {
  earnings: BigNumber;
  isLoading?: boolean;
  onPresentCollect: any;
  earningTokenPrice: number;
  earningTokenBalance: number;
  earningTokenDollarBalance: number;
}
