import React, { useState } from "react";

import { TimerWheel } from "./TimerWheel";
import { TimerContainer } from "./TimerContainer";
import { TimerButtonGroupContainer } from "./TimerButtonGroupContainer";
import { TimerButton } from "./TimerButton";

interface TimerProps {
  // Duration in seconds
  defaultDuration: number;
  onTimerReset?: (hasPlayerChanged: boolean) => void;
}

export const Timer: React.FunctionComponent<TimerProps> = ({
  defaultDuration,
  onTimerReset,
}) => {
  const [duration, setDuration] = useState(defaultDuration);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState("0");

  const refreshTimer = (hasPlayerChanged: boolean) => {
    setKey(new Date().getTime().toString());
    setIsPlaying(false);
    onTimerReset(hasPlayerChanged);
  };

  const showStart = !isPlaying;
  const showPause = isPlaying;

  return (
    <TimerContainer>
      <TimerWheel
        key={key}
        isPlaying={isPlaying}
        editable={!isPlaying}
        defaultDuration={duration}
        refreshTimer={refreshTimer}
        onDurationChange={newDuration => setDuration(newDuration)}
      />
      <TimerButtonGroupContainer>
        {!isPlaying && (
          <>
            <TimerButton
              icon="play"
              onPress={() => {
                setIsPlaying(true);
              }}
            />
            <TimerButton
              icon="skip-forward"
              onPress={() => {
                refreshTimer(true);
                setIsPlaying(false);
              }}
            />
          </>
        )}
        {showPause && (
          <>
            <TimerButton
              icon="square"
              onPress={() => {
                refreshTimer(false);
                setIsPlaying(false);
              }}
            />
            <TimerButton icon="pause" onPress={() => setIsPlaying(false)} />
            <TimerButton
              icon="skip-forward"
              onPress={() => {
                refreshTimer(true);
                setIsPlaying(true);
              }}
            />
          </>
        )}
        {!showStart && !showPause && (
          <TimerButton icon="play" onPress={() => setIsPlaying(true)} />
        )}
      </TimerButtonGroupContainer>
    </TimerContainer>
  );
};
