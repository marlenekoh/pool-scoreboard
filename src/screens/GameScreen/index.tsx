import React, { useState } from "react";
import { NavigationScreenProp } from "react-navigation";
import _ from "lodash";

import { Button } from "@components/Button";
import { Routes } from "@common/Routes";

import { GameScreenContainer } from "./GameScreenContainer";
import { Player } from "./Player";
import { PlayerSectionContainer } from "./PlayerSectionContainer";
import { Race } from "./Race";
import { Timer } from "./Timer";
import { Settings } from "./Settings";

interface GameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const GameScreen: React.FunctionComponent<GameScreenProps> = ({
  navigation,
}) => {
  const [raceTo, setRaceTo] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const nextPlayer = () => {
    // Assume total 2 players only
    setCurrentPlayer(currentPlayer == 1 ? 2 : 1);
  };

  const restartGame = () => {
    setCurrentPlayer(1);
  };

  return (
    <GameScreenContainer>
      <Settings onGameRestart={() => {}} />
      <Race
        defaultRaceTo={raceTo}
        onRaceToChange={newValue => setRaceTo(newValue)}
      />
      <PlayerSectionContainer>
        {_.map([1, 2], index => (
          <Player
            key={index}
            isCurrent={currentPlayer == index}
            index={index}
            min={0}
            max={raceTo}
          />
        ))}
      </PlayerSectionContainer>
      <Timer
        defaultDuration={10}
        onTimerReset={hasPlayerChanged => {
          if (hasPlayerChanged) {
            nextPlayer();
          }
        }}
      />
      {/* <Button
        text="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      /> */}
    </GameScreenContainer>
  );
};
