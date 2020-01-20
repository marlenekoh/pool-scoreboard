import React from "react";
import { useElapsedTime } from "use-elapsed-time";
// @ts-ignore
import AnimatedProgressWheel from "react-native-progress-wheel";

import { Text } from "@components/Text";
import { Colors } from "@common/Colors";

import { TimerWheelContainer } from "./TimerWheelContainer";
import { TimerTextContainer } from "./TimerTextContainer";

interface TimerWheelProps {
  isPlaying: boolean;
  // Duration in seconds
  duration: number;
  onFinish: () => void;
}

const TIMER_WHEEL_SIZE = 200;

export const TimerWheel: React.FunctionComponent<TimerWheelProps> = ({
  isPlaying,
  duration,
  onFinish,
}) => {
  const durationMilliseconds = duration * 1000;
  const elapsedTime = useElapsedTime(isPlaying, {
    durationMilliseconds,
  });
  const remainingTime = (durationMilliseconds - elapsedTime) / 1000;
  const remainingTimeCeil = Math.ceil(remainingTime);
  const progress = 100 - (remainingTime / duration) * 100;

  if (remainingTimeCeil === 0) {
    onFinish();
  }

  return (
    <TimerWheelContainer size={TIMER_WHEEL_SIZE}>
      <AnimatedProgressWheel
        size={TIMER_WHEEL_SIZE}
        width={10}
        color={Colors.white}
        backgroundColor={Colors.gray1}
        progress={progress}
      />
      <TimerTextContainer>
        <Text h1>{remainingTimeCeil}</Text>
      </TimerTextContainer>
    </TimerWheelContainer>
  );
};
