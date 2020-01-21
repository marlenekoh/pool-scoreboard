import React, { useState, useEffect } from "react";

import { Text } from "@components/Text";
import { Button } from "@components/Button";

import { ScoreContainer } from "./ScoreContainer";
import { ScoreButtonContainer } from "./ScoreButtonContainer";
import { Colors } from "@common/Colors";

interface ScoreProps {
  min?: number;
  max?: number;
}

export const Score: React.FunctionComponent<ScoreProps> = ({
  min = 0,
  max,
}) => {
  const [score, setScore] = useState(min);

  useEffect(() => {
    if (min < 0) {
      min = 0;
    }
    if (score > max || score < min) {
      setScore(min);
    }
  });

  return (
    <ScoreContainer>
      <ScoreButtonContainer>
        <Button
          minimal
          icon="minus-circle"
          iconColor={Colors.primary}
          disabled={score == min}
          onPress={() => {
            if (score > min) {
              setScore(score - 1);
            }
          }}
        />
      </ScoreButtonContainer>
      <Text h1>{score}</Text>
      <ScoreButtonContainer>
        <Button
          minimal
          disabled={score == max}
          icon="plus-circle"
          iconColor={Colors.primary}
          onPress={() => {
            if (score < max) {
              setScore(score + 1);
            }
          }}
        />
      </ScoreButtonContainer>
    </ScoreContainer>
  );
};
