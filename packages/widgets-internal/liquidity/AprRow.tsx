import { useTranslation } from "@mixmarvelswap/localization";
import { formatAmount } from "@mixmarvelswap/utils/formatInfoNumbers";
import { useTooltip, RowBetween, TooltipText, Text } from "@mixmarvelswap/uikit";

export default function AprRow({ lpApr7d }: { lpApr7d: number }) {
  const { t } = useTranslation();

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    t(`Based on last 7 days' performance. Does not account for impermanent loss`),
    {
      placement: "bottom",
    }
  );

  return (
    <RowBetween>
      <TooltipText ref={targetRef} bold fontSize="12px" color="secondary">
        {t("LP reward APR")}
      </TooltipText>
      {tooltipVisible && tooltip}
      <Text bold color="primary">
        {formatAmount(lpApr7d)}%
      </Text>
    </RowBetween>
  );
}
