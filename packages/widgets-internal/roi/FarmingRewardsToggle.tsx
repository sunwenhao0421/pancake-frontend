import { memo, useCallback } from "react";

import { Checkbox, Flex } from "@mixmarvelswap/uikit";

interface Props {
  on?: boolean;
  onToggle?: (on: boolean) => void;
}

export const FarmingRewardsToggle = memo(function FarmingRewardsToggle({ on = true, onToggle }: Props) {
  const onChange = useCallback(() => onToggle?.(!on), [onToggle, on]);

  return (
    <Flex alignItems="center">
      <Checkbox scale="sm" checked={on} onChange={onChange} />
    </Flex>
  );
});
