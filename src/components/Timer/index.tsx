import React, { useState } from "react";

import { Button } from "@components/Button";

import { TimerText } from "./TimerText";

interface TimerProps {
  // Duration in seconds
  duration: number;
}

export const Timer: React.FunctionComponent<TimerProps> = ({ duration }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState("0");

  const refreshTimer = () => {
    setKey(new Date().getTime().toString());
  };

  return (
    <>
      <TimerText
        key={key}
        isPlaying={isPlaying}
        duration={duration}
        onFinish={refreshTimer}
      />
      <Button text="Reset" onPress={refreshTimer} />
      <Button text="Pause" onPress={() => setIsPlaying(false)} />
      <Button text="Resume" onPress={() => setIsPlaying(true)} />
    </>
  );
};
