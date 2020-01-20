import React from "react";
import { Button as ReactNativeButton } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Text } from "@components/Text";
import { Colors } from "@common/Colors";

import { ButtonContainer } from "./ButtonContainer";
import { IconContainer } from "./IconContainer";

interface ButtonProps
  extends Omit<React.ComponentProps<typeof ReactNativeButton>, "title"> {
  // Icon name should be from Feather Icons
  icon?: string;
  size?: "small" | "medium" | "large";
  text?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  icon,
  size,
  disabled,
  ...buttonProps
}) => {
  const getIconSize = () => {
    if (!size) return 24;
    switch (size) {
      case "small":
        return 16;
      case "medium":
        return 32;
      case "large":
        return 48;
    }
  };

  const isIconButton = icon && !text;

  return (
    <ButtonContainer
      {...buttonProps}
      disabled={disabled}
      isIconButton={isIconButton}
      activeOpacity={0.8}
      underlayColor={Colors.overlay}
    >
      <>
        {icon && (
          <IconContainer isIconButton={isIconButton}>
            <Icon
              name={icon}
              size={getIconSize()}
              color={disabled ? Colors.gray1 : Colors.black}
            />
          </IconContainer>
        )}
        {text && <Text>{text}</Text>}
      </>
    </ButtonContainer>
  );
};
