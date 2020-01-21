import styled from "styled-components/native";

import { Colors } from "@common/Colors";

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.overlay};
  z-index: 5;
`;
