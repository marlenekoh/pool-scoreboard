import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { Text } from "@components/Text";

import { ButtonContainer } from "./ButtonContainer";
import { IconContainer } from "./IconContainer";

interface ButtonProps {
  iconProps?: React.ComponentProps<typeof Icon>;
  text?: string;
  onPress?: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  onPress,
  iconProps,
}) => {
  return (
    <ButtonContainer activeOpacity={0.6} onPress={onPress}>
      {iconProps && (
        <IconContainer>
          <Icon {...iconProps} />
        </IconContainer>
      )}
      <Text>{text}</Text>
    </ButtonContainer>
  );
};
