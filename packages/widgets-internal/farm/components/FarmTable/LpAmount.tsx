import { Skeleton } from "@mixmarvelswap/uikit";
import { FarmTableAmountProps } from "../../types";
import { Amount } from "../styles";

export interface EarnedPropsWithLoading extends FarmTableAmountProps {
  userDataReady: boolean;
}

const LpAmount: React.FunctionComponent<React.PropsWithChildren<EarnedPropsWithLoading>> = ({
  amount,
  userDataReady,
}) => {
  const amountDisplay = amount > 0 ? amount : 0;
  if (userDataReady) {
    return <Amount amount={amountDisplay}>{`${amountDisplay} LP`}</Amount>;
  }
  return (
    <Amount amount={0}>
      <Skeleton width={60} />
    </Amount>
  );
};

export default LpAmount;
