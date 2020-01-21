import styled from "styled-components/native";

import { Intent } from "@common/Intent";
import { Colors } from "@common/Colors";

interface ButtonContainerProps {
  isIconButton?: boolean;
  intent?: Intent;
  disabled?: boolean;
  minimal?: boolean;
}

export const ButtonContainer = styled.TouchableHighlight<ButtonContainerProps>`
  flex-direction: row;
  align-self: center;
  align-items: center;

  border-radius: 100;
  padding: 8px ${({ isIconButton }) => !isIconButton && ` 24px`};
  background-color: ${({ minimal, disabled, intent }) => {
    if (minimal || disabled) {
      return Colors.transparent;
    } else if (intent) {
      return Colors[intent];
    }
    return Colors.primary;
  }};
`;
