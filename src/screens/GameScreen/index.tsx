import React, { useState } from "react";
import { NavigationScreenProp } from "react-navigation";

import { Button } from "@components/Button";
import { Routes } from "@common/Routes";
import { Divider } from "@components/Divider";

import { GameScreenContainer } from "./GameScreenContainer";
import { Player } from "./Player";
import { PlayerSectionContainer } from "./PlayerSectionContainer";
import { Race } from "./Race";
import { Timer } from "./Timer";

interface GameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const GameScreen: React.FunctionComponent<GameScreenProps> = ({
  navigation,
}) => {
  const [raceTo, setRaceTo] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  return (
    <GameScreenContainer>
      <Race
        defaultRaceTo={raceTo}
        onRaceToChange={newValue => setRaceTo(newValue)}
      />
      <PlayerSectionContainer>
        <Player isCurrent={currentPlayer == 1} index={1} min={0} max={raceTo} />
        <Divider vertical />
        <Player isCurrent={currentPlayer == 2} index={2} min={0} max={raceTo} />
      </PlayerSectionContainer>
      <Timer defaultDuration={10} />
      {/* <Button
        text="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      /> */}
    </GameScreenContainer>
  );
};
