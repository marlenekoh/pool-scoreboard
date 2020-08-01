import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

import { getFontSizeFromButtonSize } from "@common/getFontSizeFromButtonSize";

import { CurrentPlayerIconContainer } from "./CurrentPlayerIconContainer";
import { Text } from "@components/Text";

export const CurrentPlayerIcon: React.FunctionComponent = () => {
  return (
    <CurrentPlayerIconContainer>
      <Text>
        <Icon name="play" size={getFontSizeFromButtonSize("small")} />
      </Text>
    </CurrentPlayerIconContainer>
  );
};
