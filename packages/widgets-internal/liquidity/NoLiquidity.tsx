import { useTranslation } from "@mixmarvelswap/localization";
import { Text } from "@mixmarvelswap/uikit";

export function NoLiquidity() {
  const { t } = useTranslation();

  return (
    <Text color="textSubtle" textAlign="center">
      {t("No liquidity found.")}
    </Text>
  );
}
