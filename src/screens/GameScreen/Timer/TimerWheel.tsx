import React, { useEffect, useState } from "react";
import { useElapsedTime } from "use-elapsed-time";
// @ts-ignore
import AnimatedProgressWheel from "react-native-progress-wheel";

import { Colors } from "@common/Colors";
import { Input } from "@components/Input";

import { TimerWheelContainer } from "./TimerWheelContainer";
import { TimerTextContainer } from "./TimerTextContainer";
import { Sound } from "@components/Sound";

interface TimerWheelProps {
  isPlaying: boolean;
  // Duration in seconds
  defaultDuration: number;
  editable?: boolean;
  onDurationChange: (newDuration: number) => void;
  refreshTimer: (hasPlayerChanged: boolean) => void;
}

const TIMER_WHEEL_SIZE = 180;
const START_BEEPING_AT = 5;

export const TimerWheel: React.FunctionComponent<TimerWheelProps> = ({
  isPlaying,
  editable,
  defaultDuration: duration,
  onDurationChange,
  refreshTimer,
}) => {
  const [soundPlayCount, setSoundPlayCount] = useState(0);
  const durationMilliseconds = duration * 1000;
  const elapsedTime = useElapsedTime(isPlaying, {
    durationMilliseconds,
  });
  const remainingTime = (durationMilliseconds - elapsedTime) / 1000;
  const remainingTimeCeil = Math.ceil(remainingTime);
  const progress = 100 - (remainingTime / duration) * 100;

  const playBeepOnce = async () => {
    const { Beep } = await Sound;
    await Beep.setPositionAsync(0);
    await Beep.playAsync();
  };

  const playBeepLongOnce = async () => {
    const { BeepLong } = await Sound;
    await BeepLong.setPositionAsync(0);
    await BeepLong.playAsync();
    BeepLong.setOnPlaybackStatusUpdate(playbackStatus => {
      if (playbackStatus.isLoaded && playbackStatus.didJustFinish) {
        refreshTimer(true);
      }
    });
  };

  const stopBeepLong = async () => {
    const { BeepLong } = await Sound;
    await BeepLong.stopAsync();
  };

  useEffect(() => {
    const shouldPlayBeep =
      isPlaying &&
      remainingTimeCeil > 0 &&
      remainingTimeCeil <= 5 &&
      soundPlayCount === START_BEEPING_AT - remainingTimeCeil;

    const shouldPlayBeepLong =
      remainingTimeCeil === 0 && soundPlayCount !== START_BEEPING_AT + 1;

    if (shouldPlayBeep) {
      playBeepOnce();
      setSoundPlayCount(soundPlayCount + 1);
    } else if (shouldPlayBeepLong) {
      playBeepLongOnce();
      setSoundPlayCount(soundPlayCount + 1);
    } else if (remainingTimeCeil === 0 && !isPlaying) {
      stopBeepLong();
    } else if (remainingTimeCeil === 0 && isPlaying) {
      refreshTimer(true);
    }
  }, [isPlaying, remainingTimeCeil]);

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
