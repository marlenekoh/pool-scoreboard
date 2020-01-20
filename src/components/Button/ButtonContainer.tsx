import styled from "styled-components/native";

import { Intent } from "@common/Intent";
import { Colors } from "@common/Colors";

interface ButtonContainerProps {
  isIconButton?: boolean;
  intent?: Intent;
  disabled?: boolean;
}

export const ButtonContainer = styled.TouchableHighlight<ButtonContainerProps>`
  align-self: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;

  border-radius: 30;
  padding: 8px ${({ isIconButton }) => !isIconButton && ` 24px`};
  background-color: ${({ intent }) => (intent ? Colors[intent] : Colors.white)};

  ${({ disabled }) => disabled && `background-color: ${Colors.gray2}`}
`;
