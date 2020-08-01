import styled from "styled-components/native";

import { Colors } from "@common/Colors";

interface MenuProps {
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

export const Menu = styled.View<MenuProps>`
  position: absolute;
  width: 180px;
  padding: 8px;
  ${({ top }) => top && `top: 50;`}
  ${({ bottom }) => bottom && `bottom: 50;`}
  ${({ right }) => right && `right: 0;`}
  ${({ left }) => left && `left: 0;`}
  background-color: ${Colors.white};
  border-radius: 15;
  z-index: 10;
`;

export * from "./MenuItem";
export * from "./MenuHeader";
