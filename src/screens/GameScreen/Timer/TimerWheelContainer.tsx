import styled from "styled-components/native";

interface TimerWheelContainerProps {
  size: number;
}

export const TimerWheelContainer = styled.View<TimerWheelContainerProps>`
  transform: rotate(270deg);
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 30px;
`;
