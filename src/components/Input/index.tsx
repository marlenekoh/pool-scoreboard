import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "react-native";

import { Button } from "@components/Button";
import { Colors } from "@common/Colors";
import {
  getFontSizeFromProps,
  TextStyleProps,
} from "@common/getFontSizeFromProps";
import { getFontSizeFromButtonSize } from "@common/getFontSizeFromButtonSize";

import { InputContainer } from "./InputContainer";
import { InputTextContainer } from "./InputTextContainer";
import { getButtonSizeFromFontSize } from "@common/getButtonSizeFromFontSize";

interface InputProps
  extends React.ComponentProps<typeof TextInput>,
    TextStyleProps {
  showSubmitButtonOnFocus?: boolean;
  textAlign?: "left" | "center" | "right";
  bold?: boolean;
  size?: "small" | "medium" | "large";
  color?: string;
}

export const Input: React.FunctionComponent<InputProps> = ({
  showSubmitButtonOnFocus,
  textAlign = "left",
  bold,
  size,
  color = Colors.black,
  ...otherProps
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (focused) {
      inputRef?.current?.focus();
    } else {
      inputRef?.current?.blur();
    }
  });

  const fontSize = size
    ? getFontSizeFromButtonSize(size)
    : getFontSizeFromProps(otherProps);

  return (
    <InputContainer>
      <InputTextContainer color={color} focused={focused}>
        <TextInput
          ref={inputRef}
          style={{
            fontSize,
            textAlign,
            fontWeight: bold ? "bold" : "normal",
            color: color,
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...otherProps}
        />
      </InputTextContainer>
      {showSubmitButtonOnFocus && focused && (
        <Button
          minimal
          size={size ? size : getButtonSizeFromFontSize(fontSize)}
          icon="check"
          iconColor={color}
          onPress={() => setFocused(false)}
        />
      )}
    </InputContainer>
  );
};
