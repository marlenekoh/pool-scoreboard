import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "react-native";

import { Button } from "@components/Button";
import { Colors } from "@common/Colors";

import { InputContainer } from "./InputContainer";
import { InputTextContainer } from "./InputTextContainer";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  showSubmitButtonOnFocus?: boolean;
}

export const Input: React.FunctionComponent<InputProps> = ({
  showSubmitButtonOnFocus,
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

  return (
    <InputContainer>
      <InputTextContainer focused={focused}>
        <TextInput
          ref={inputRef}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...otherProps}
        />
      </InputTextContainer>
      <Button
        minimal
        size="small"
        icon="check"
        iconColor={
          showSubmitButtonOnFocus && focused ? Colors.black : Colors.transparent
        }
        onPress={() => setFocused(false)}
      />
    </InputContainer>
  );
};
