import React from "react";

import { Button } from "@components/Button";
import { Colors } from "@common/Colors";

import { TimerButtonContainer } from "./TimerButtonContainer";

interface TimerButtonProps extends React.ComponentProps<typeof Button> {}

export const TimerButton: React.FunctionComponent<TimerButtonProps> = props => {
  return (
    <TimerButtonContainer>
      <Button minimal size="large" iconColor={Colors.primary} {...props} />
    </TimerButtonContainer>
  );
};
