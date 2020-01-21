import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const GameScreenContainer = styled.View`
  width: ${Dimensions.get("window").width};
  height: ${Dimensions.get("window").height};
`;
