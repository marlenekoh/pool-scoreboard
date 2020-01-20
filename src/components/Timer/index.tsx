import React, { useState } from "react";

import { Button } from "@components/Button";

import { TimerText } from "./TimerText";

interface TimerProps {
  // Duration in seconds
  duration: number;
}

export const Timer: React.FunctionComponent<TimerProps> = ({ duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState("0");

  const refreshTimer = () => {
    setKey(new Date().getTime().toString());
    setIsPlaying(true);
  };

  return (
    <>
      <TimerText
        key={key}
        isPlaying={isPlaying}
        duration={duration}
        onFinish={refreshTimer}
      />
      <Button text="Start" onPress={() => setIsPlaying(true)} />
      <Button text="Reset" onPress={refreshTimer} />
      <Button text="Pause" onPress={() => setIsPlaying(false)} />
      <Button text="Resume" onPress={() => setIsPlaying(true)} />
    </>
  );
};
