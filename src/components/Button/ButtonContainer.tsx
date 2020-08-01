import styled from "styled-components/native";

import { Intent } from "@common/Intent";
import { Colors } from "@common/Colors";

interface ButtonContainerProps {
  isMenuButton?: boolean;
  isIconButton?: boolean;
  intent?: Intent;
  disabled?: boolean;
  minimal?: boolean;
}

export const ButtonContainer = styled.TouchableHighlight<ButtonContainerProps>`
  flex-direction: row;
  align-self: stretch;
  align-items: center;

  border-radius: ${({ isMenuButton }) => (isMenuButton ? 10 : 30)};
  padding: 8px
    ${({ isIconButton, isMenuButton }) =>
      !isIconButton && !isMenuButton && ` 24px`};

  background-color: ${({ minimal, disabled, intent }) => {
    if (minimal || disabled) {
      return Colors.transparent;
    } else if (intent) {
      return Colors[intent];
    }
    return Colors.primary;
  }};
`;
