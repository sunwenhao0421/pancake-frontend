import { Percent } from "@mixmarvelswap/sdk";
import { formatFraction } from "@mixmarvelswap/utils/formatFractions";

export function getAccrued(principal: number, apy: Percent, stakeFor = 1) {
  const interestEarned = principal * parseFloat(formatFraction(apy.asFraction, 6) || "0") * (stakeFor / 365);
  return principal + interestEarned;
}
