import styled from "styled-components/native";

import { Colors } from "@common/Colors";

interface DividerProps {
  vertical?: boolean;
  length?: number;
}
export const Divider = styled.View<DividerProps>`
  border: none;
  ${({ vertical, length }) =>
    vertical
      ? `height: ${length ? `${length}px` : "auto"};
    border-left-color: ${Colors.black};
    border-left-width: 1px;`
      : `width: ${length ? `${length}px` : "auto"};
      border-bottom-color: ${Colors.black};
    border-bottom-width: 1px;`}
`;
