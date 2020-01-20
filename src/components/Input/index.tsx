import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "react-native";

import { Button } from "@components/Button";
import { Colors } from "@common/Colors";
import {
  getFontSizeFromProps,
  TextStyleProps,
} from "@common/getFontSizeFromProps";
import { getButtonSizeFromFontSize } from "@common/getButtonSizeFromFontSize";

import { InputContainer } from "./InputContainer";
import { InputTextContainer } from "./InputTextContainer";

interface InputProps
  extends React.ComponentProps<typeof TextInput>,
    TextStyleProps {
  showSubmitButtonOnFocus?: boolean;
  textAlign?: "left" | "center" | "right";
}

export const Input: React.FunctionComponent<InputProps> = ({
  showSubmitButtonOnFocus,
  textAlign = "left",
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

  const fontSize = getFontSizeFromProps(otherProps);
  const buttonSize = getButtonSizeFromFontSize(fontSize);

  return (
    <InputContainer>
      <InputTextContainer focused={focused}>
        <TextInput
          ref={inputRef}
          style={{ fontSize, textAlign }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...otherProps}
        />
      </InputTextContainer>
      {showSubmitButtonOnFocus && focused && (
        <Button
          minimal
          size={buttonSize}
          icon="check"
          iconColor={Colors.black}
          onPress={() => setFocused(false)}
        />
      )}
    </InputContainer>
  );
};
