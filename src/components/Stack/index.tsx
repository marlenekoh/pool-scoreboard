import styled from "styled-components/native";

interface StackProps {
  gutter?: number;
  vertical?: boolean;
  stretchChildren?: boolean;
  fillParentHeight?: boolean;
  fillParentWidth?: boolean;
}

export const Stack = styled.View<StackProps>`
  flex-wrap: nowrap;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  align-items: ${({ stretchChildren }) =>
    stretchChildren ? "stretch" : "center"};

  height: ${({ fillParentHeight }) => (fillParentHeight ? "100%" : "auto")};
  width: ${({ fillParentWidth }) => (fillParentWidth ? "100%" : "auto")};

  & > * {
    flex-grow: 0;
    margin: 0;
    margin-right: 30px;
    margin-right: ${({ vertical, gutter }) => (vertical ? 0 : `${gutter}px`)};
    margin-bottom: ${({ vertical, gutter }) => (!vertical ? 0 : `${gutter}px`)};
  }

  & > *:last-child {
    ${({ vertical }) => (vertical ? `margin-bottom: 0;` : `margin-right: 0;`)}
  }
`;
