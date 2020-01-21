import React from "react";
import { Button as ReactNativeButton } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { getFontSizeFromButtonSize } from "@common/getFontSizeFromButtonSize";
import { getFontStyleFromButtonSize } from "@common/getFontStyleFromButtonSize";
import { Text } from "@components/Text";
import { Colors } from "@common/Colors";
import { Intent } from "@common/Intent";

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
  bold?: boolean;
  uppercase?: boolean;
  isMenuButton?: boolean;
  intent?: Intent;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  icon,
  size = "medium",
  disabled,
  iconColor,
  intent,
  minimal,
  isMenuButton,
  onPress,
  ...textProps
}) => {
  const isIconButton = icon && !text;

  if (!iconColor) {
    iconColor = minimal ? Colors.black : Colors.white;
  }

  return (
    <ButtonContainer
      intent={intent}
      onPress={onPress}
      minimal={minimal}
      disabled={disabled}
      isMenuButton={isMenuButton}
      isIconButton={isIconButton}
      activeOpacity={0.8}
      underlayColor={minimal ? Colors.transparent : Colors.overlay}
    >
      <>
        {icon && (
          <IconContainer isIconButton={isIconButton}>
            <Icon
              name={icon}
              size={getFontSizeFromButtonSize(size)}
              color={disabled ? Colors.gray2 : iconColor}
            />
          </IconContainer>
        )}
        {/** TODO: Update text size acc to button size */}
        {text && (
          <Text
            {...textProps}
            color={Colors.black}
            {...getFontStyleFromButtonSize(size)}
          >
            {text}
          </Text>
        )}
      </>
    </ButtonContainer>
  );
};
