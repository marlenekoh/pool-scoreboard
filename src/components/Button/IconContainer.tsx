import styled from "styled-components/native";

interface IconContainerProps {
  isIconButton?: boolean;
}

export const IconContainer = styled.View<IconContainerProps>`
  ${({ isIconButton }) => !isIconButton && `padding-right: 8px;`}
`;
