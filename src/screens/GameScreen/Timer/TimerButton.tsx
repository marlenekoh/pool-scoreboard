import React from "react";

import { Button } from "@components/Button";

import { TimerButtonContainer } from "./TimerButtonContainer";

interface TimerButtonProps extends React.ComponentProps<typeof Button> {}

export const TimerButton: React.FunctionComponent<TimerButtonProps> = props => {
  return (
    <TimerButtonContainer>
      <Button size="large" {...props} />
    </TimerButtonContainer>
  );
};
