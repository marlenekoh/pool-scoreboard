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
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState("0");

  const refreshTimer = (hasPlayerChanged: boolean) => {
    setKey(new Date().getTime().toString());
    setHasStarted(false);
    setIsPlaying(false);
    onTimerReset(hasPlayerChanged);
  };

  const showStart = !hasStarted;
  const showPause = hasStarted && isPlaying;

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
        {showStart && (
          <TimerButton
            icon="play"
            onPress={() => {
              setHasStarted(true), setIsPlaying(true);
            }}
          />
        )}
        {showPause && (
          <>
            <TimerButton icon="skip-forward" onPress={refreshTimer} />
            <TimerButton icon="pause" onPress={() => setIsPlaying(false)} />
          </>
        )}
        {!showStart && !showPause && (
          <TimerButton icon="play" onPress={() => setIsPlaying(true)} />
        )}
      </TimerButtonGroupContainer>
    </TimerContainer>
  );
};
