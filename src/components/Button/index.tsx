import React from "react";
import { Button as ReactNativeButton } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Text } from "@components/Text";
import { Colors } from "@common/Colors";

import { ButtonContainer } from "./ButtonContainer";
import { IconContainer } from "./IconContainer";

interface ButtonProps
  extends Pick<
    React.ComponentProps<typeof ReactNativeButton>,
    "disabled" | "onPress"
  > {
  // Icon name should be from Feather Icons
  icon?: string;
  // Color of icon
  iconColor?: string;
  // Size of button
  size?: "small" | "medium" | "large";
  // Text rendered in button
  text?: string;
  // If `true`, does not render button background
  minimal?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  icon,
  size,
  disabled,
  iconColor = Colors.black,
  minimal,
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
      minimal={minimal}
      disabled={disabled}
      isIconButton={isIconButton}
      activeOpacity={0.8}
      underlayColor={minimal ? Colors.transparent : Colors.overlay}
    >
      <>
        {icon && (
          <IconContainer isIconButton={isIconButton}>
            <Icon
              name={icon}
              size={getIconSize()}
              color={disabled ? Colors.gray1 : iconColor}
            />
          </IconContainer>
        )}
        {text && <Text>{text}</Text>}
      </>
    </ButtonContainer>
  );
};
