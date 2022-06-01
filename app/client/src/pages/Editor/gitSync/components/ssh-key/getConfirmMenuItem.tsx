import React from "react";
import { ConfirmMenuItem, FlexRow } from "./StyledComponents";
import Text, { TextType } from "components/ads/Text";
import {
  createMessage,
  DELETE_CONFIRMATION_MODAL_TITLE,
  REGENERATE_KEY_CONFIRM_MESSAGE,
  YES,
} from "@appsmith/constants/messages";
import Button, { Category, Size } from "components/ads/Button";

/**
 * getConfirmMenuItem
 * @param regenerateKey {() => void}
 */
export function getConfirmMenuItem(regenerateKey: () => void) {
  return (
    <ConfirmMenuItem>
      <Text type={TextType.P3}>
        {createMessage(REGENERATE_KEY_CONFIRM_MESSAGE)}
      </Text>
      <FlexRow style={{ marginTop: 16.5, justifyContent: "space-between" }}>
        <Text type={TextType.P1}>
          {createMessage(DELETE_CONFIRMATION_MODAL_TITLE)}
        </Text>
        <Button
          category={Category.primary}
          onClick={regenerateKey}
          size={Size.xs}
          text={createMessage(YES)}
        />
      </FlexRow>
    </ConfirmMenuItem>
  );
}
