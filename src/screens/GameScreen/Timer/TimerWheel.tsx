import React from "react";
import { useElapsedTime } from "use-elapsed-time";
// @ts-ignore
import AnimatedProgressWheel from "react-native-progress-wheel";

import { Colors } from "@common/Colors";
import { Input } from "@components/Input";

import { TimerWheelContainer } from "./TimerWheelContainer";
import { TimerTextContainer } from "./TimerTextContainer";

interface TimerWheelProps {
  isPlaying: boolean;
  // Duration in seconds
  defaultDuration: number;
  editable?: boolean;
  onDurationChange: (newDuration: number) => void;
  refreshTimer: (hasPlayerChanged: boolean) => void;
}

const TIMER_WHEEL_SIZE = 180;

export const TimerWheel: React.FunctionComponent<TimerWheelProps> = ({
  isPlaying,
  editable,
  defaultDuration: duration,
  onDurationChange,
  refreshTimer,
}) => {
  const durationMilliseconds = duration * 1000;
  const elapsedTime = useElapsedTime(isPlaying, {
    durationMilliseconds,
  });
  const remainingTime = (durationMilliseconds - elapsedTime) / 1000;
  const remainingTimeCeil = Math.ceil(remainingTime);
  const progress = 100 - (remainingTime / duration) * 100;

  if (remainingTimeCeil === 0) {
    refreshTimer(true);
  }

  return (
    <TimerWheelContainer size={TIMER_WHEEL_SIZE}>
      <AnimatedProgressWheel
        size={TIMER_WHEEL_SIZE}
        width={10}
        color={remainingTime < 5 ? Colors.warning2 : Colors.secondary}
        backgroundColor={remainingTime < 5 ? Colors.warning : Colors.primary}
        progress={progress}
      />
      <TimerTextContainer>
        <Input
          h1
          selectTextOnFocus
          editable={editable}
          showSubmitButtonOnFocus
          keyboardType="number-pad"
          textAlign="center"
          maxLength={3}
          onEndEditing={({ nativeEvent }) => {
            const duration = parseInt(nativeEvent.text);
            onDurationChange(isNaN(duration) || duration == 0 ? 10 : duration);
            refreshTimer(false);
          }}
        >
          {remainingTimeCeil}
        </Input>
      </TimerTextContainer>
    </TimerWheelContainer>
  );
};
