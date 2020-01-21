import styled from "styled-components/native";
import { Colors } from "@common/Colors";

interface InputTextContainerProps {
  focused?: boolean;
}

export const InputTextContainer = styled.View<InputTextContainerProps>`
  flex: 1;
  flex-wrap: nowrap;
  margin-bottom: 8px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ focused }) =>
    focused ? Colors.black : Colors.transparent};
`;
