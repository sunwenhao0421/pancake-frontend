import { useTranslation } from "@mixmarvelswap/localization";
import { Button, Text } from "@mixmarvelswap/uikit";
import { ActionContent, ActionTitles, StyledActionContainer } from "./styles";

export interface StakeComponentProps {
  lpSymbol: string;
  isStakeReady: boolean;
  onPresentDeposit: () => void;
}

const StakeComponent: React.FunctionComponent<React.PropsWithChildren<StakeComponentProps>> = ({
  lpSymbol,
  isStakeReady,
  onPresentDeposit,
}) => {
  const { t } = useTranslation();

  return (
    <StyledActionContainer>
      <ActionTitles>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px" pr="4px">
          {t("Stake")}
        </Text>
        <Text bold color="secondary" fontSize="12px">
          {lpSymbol}
        </Text>
      </ActionTitles>
      <ActionContent>
        <Button width="100%" onClick={onPresentDeposit} variant="secondary" disabled={isStakeReady}>
          {t("Stake LP")}
        </Button>
      </ActionContent>
    </StyledActionContainer>
  );
};

export default StakeComponent;
