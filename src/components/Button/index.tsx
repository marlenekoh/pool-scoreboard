import React from "react";
import { Button as ReactNativeButton } from "react-native-elements";

interface ButtonProps extends React.ComponentProps<typeof ReactNativeButton> {}

// TODO: style buttons
export const Button: React.FunctionComponent<ButtonProps> = props => {
  return (
    <ReactNativeButton
      {...props}
      buttonStyle={
        props.type === "clear"
          ? {}
          : {
              borderRadius: 20,
              backgroundColor: "gray",
              paddingLeft: 20,
              paddingRight: 20,
            }
      }
    />
  );
};
