import React, { useState } from "react";

import { Text } from "@components/Text";
import { Button } from "@components/Button";

import { ScoreContainer } from "./ScoreContainer";
import { ScoreButtonContainer } from "./ScoreButtonContainer";

interface ScoreProps {
  min?: number;
  max?: number;
}

export const Score: React.FunctionComponent<ScoreProps> = ({
  min = 0,
  max,
}) => {
  const [score, setScore] = useState(min);

  return (
    <ScoreContainer>
      <ScoreButtonContainer>
        <Button
          size="small"
          icon="minus"
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
          size="small"
          disabled={score == max}
          icon="plus"
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
