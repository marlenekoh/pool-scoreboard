import styled from "styled-components/native";

import { Colors } from "@common/Colors";

interface PlayerContainerProps {
  isCurrentPlayer?: boolean;
}

export const PlayerContainer = styled.View<PlayerContainerProps>`
  align-items: center;
  align-self: center;
  flex: 0.5;
  margin: 20px 8px;
  padding: 10px 0;
  border-radius: 15;
  ${({ isCurrentPlayer }) =>
    isCurrentPlayer && `background-color: ${Colors.white};`}
`;
