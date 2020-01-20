import React from "react";
import { useElapsedTime } from "use-elapsed-time";

import { Text } from "@components/Text";

interface TimerTextProps {
  isPlaying: boolean;
  // Duration in seconds
  duration: number;
  onFinish: () => void;
}

export const TimerText: React.FunctionComponent<TimerTextProps> = ({
  isPlaying,
  duration,
  onFinish,
}) => {
  const durationMilliseconds = duration * 1000;
  const elapsedTime = useElapsedTime(isPlaying, {
    durationMilliseconds,
  });
  const remainingTime = Math.ceil((durationMilliseconds - elapsedTime) / 1000);

  if (remainingTime === 0) {
    onFinish();
  }

  return <Text>{remainingTime}</Text>;
};
