import { useTranslation } from "@mixmarvelswap/localization";
import { ReactNode } from "react";
import { styled } from "styled-components";
//  should be ok to import type from sdk
import {
  AtomBox,
  AutoColumn,
  AutoRow,
  Button,
  Flex,
  ModalActions,
  ModalBody,
  ModalCloseButton,
  ModalContainer,
  ModalProps,
  RowBetween,
  Tag,
  Text,
} from "@mixmarvelswap/uikit";
import type { FeeAmount } from "@mixmarvelswap/v3-sdk";
import Tags from "../Tags";

const { BoostedTag, FarmAuctionTag, V3FeeTag } = Tags;

const ScrollableContainer = styled(Flex)`
  flex-direction: column;
  height: auto;
  max-height: 60vh;
`;

interface ViewAllFarmModalProps extends ModalProps {
  isReady: boolean;
  lpSymbol: string;
  onAddLiquidity: () => void;
  tokenPairImage: ReactNode;
  boosted?: boolean;
  feeAmount?: FeeAmount;
  isCommunityFarm?: boolean;
  multiplier: string;
  children: ReactNode;
  onHarvestAll?: () => void;
  harvesting?: boolean;
}

const ViewAllFarmModal: React.FunctionComponent<React.PropsWithChildren<ViewAllFarmModalProps>> = ({
  isReady,
  lpSymbol,
  tokenPairImage,
  boosted,
  feeAmount,
  isCommunityFarm,
  multiplier,
  children,
  onDismiss,
  onHarvestAll,
  harvesting,
}) => {
  const { t } = useTranslation();

  return (
    <ModalContainer style={{ minWidth: "300px", maxHeight: "90vh", overflow: "hidden" }}>
      <AtomBox bg="gradientBubblegum" py="24px" maxWidth="420px">
        <RowBetween flexWrap="nowrap" px="24px">
          <Flex alignItems="center" width="100%">
            {tokenPairImage}
            <Text bold m="0 8px">
              {lpSymbol.split(" ")[0]}
            </Text>
            <AutoRow gap="4px" justifyContent="flex-start" flex={1}>
              {isReady && multiplier && (
                <Tag mr="4px" variant="secondary">
                  {multiplier}
                </Tag>
              )}
              {isReady && feeAmount && <V3FeeTag mr="4px" feeAmount={feeAmount} />}
              {isReady && boosted && <BoostedTag mr="4px" />}
              {isReady && isCommunityFarm && <FarmAuctionTag />}
            </AutoRow>
          </Flex>
          <ModalCloseButton onDismiss={onDismiss} />
        </RowBetween>
        <ModalBody mt="16px">
          <ScrollableContainer px="24px">{children}</ScrollableContainer>
        </ModalBody>
        <AutoColumn px="24px" gap="16px">
          {onHarvestAll && (
            <ModalActions>
              <Button width="100%" variant="primary" disabled={harvesting} onClick={onHarvestAll}>
                {t("Harvest All")}
              </Button>
            </ModalActions>
          )}
        </AutoColumn>
      </AtomBox>
    </ModalContainer>
  );
};

export default ViewAllFarmModal;
