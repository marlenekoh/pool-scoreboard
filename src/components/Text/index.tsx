import styled from "styled-components/native";

interface TextProps {
  bold?: boolean;
  uppercase?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  sub1?: boolean;
  sub2?: boolean;
}
// TODO: include custom fonts
export const Text = styled.Text<TextProps>`
  ${({ uppercase }) => uppercase && `text-transform: uppercase`}
  ${({ bold }) => bold && `font-weight: bold`}
  font-size: ${props => {
    if ("h1" in props) {
      return "48px";
    } else if ("h2" in props) {
      return "32px";
    } else if ("h3" in props) {
      return "24px";
    } else if ("h4" in props) {
      return "16px";
    } else if ("p1" in props || "h5" in props) {
      return "14px";
    } else if ("p2" in props || "sub1" in props) {
      return "12px";
    } else if ("p3" in props || "sub2" in props) {
      return "10px";
    } else {
      return "14px";
    }
  }}
`;
