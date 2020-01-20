import React, { useState } from "react";

import { Button } from "@components/Button";

import { TimerWheel } from "./TimerWheel";
import { TimerButtonContainer } from "./TimerButtonContainer";
import { TimerContainer } from "./TimerContainer";
import { TimerButtonGroupContainer } from "./TimerButtonGroupContainer";

interface TimerProps {
  // Duration in seconds
  defaultDuration: number;
}

export const Timer: React.FunctionComponent<TimerProps> = ({
  defaultDuration,
}) => {
  const [duration, setDuration] = useState(defaultDuration);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState("0");

  const refreshTimer = () => {
    setKey(new Date().getTime().toString());
    setHasStarted(false);
    setIsPlaying(false);
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
          <TimerButtonContainer>
            <Button
              text="Start"
              onPress={() => {
                setHasStarted(true), setIsPlaying(true);
              }}
            />
          </TimerButtonContainer>
        )}
        {showPause && (
          <TimerButtonContainer>
            <Button text="Pause" onPress={() => setIsPlaying(false)} />
          </TimerButtonContainer>
        )}
        {!showStart && !showPause && (
          <>
            <TimerButtonContainer>
              <Button text="Resume" onPress={() => setIsPlaying(true)} />
            </TimerButtonContainer>
            <TimerButtonContainer>
              <Button text="Reset" onPress={refreshTimer} />
            </TimerButtonContainer>
          </>
        )}
      </TimerButtonGroupContainer>
    </TimerContainer>
  );
};
