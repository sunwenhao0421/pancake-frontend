import { useTranslation } from "@mixmarvelswap/localization";
import { AddIcon, Button } from "@mixmarvelswap/uikit";
import { NextLinkFromReactRouter } from "../components/NextLink";

export function GotoAddLiquidityButton() {
  const { t } = useTranslation();

  return (
    <NextLinkFromReactRouter to="/add">
      <Button id="join-pool-button" width="100%" startIcon={<AddIcon color="invertedContrast" />}>
        {t("Add Liquidity")}
      </Button>
    </NextLinkFromReactRouter>
  );
}
