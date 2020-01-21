import styled from "styled-components/native";

import {
  TextStyleProps,
  getFontSizeFromProps,
} from "@common/getFontSizeFromProps";
import { Colors } from "@common/Colors";

interface TextProps extends TextStyleProps {
  bold?: boolean;
  uppercase?: boolean;
  color?: string;
}

// TODO: include custom fonts
export const Text = styled.Text<TextProps>`
  ${({ uppercase }) => uppercase && `text-transform: uppercase`}
  ${({ bold }) => bold && `font-weight: bold`}
  font-size: ${props => getFontSizeFromProps(props)}px;
  color: ${({ color }) => (color ? color : Colors.black)};
`;
