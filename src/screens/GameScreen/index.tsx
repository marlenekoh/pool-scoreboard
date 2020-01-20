import React, { useState } from "react";
import { NavigationScreenProp } from "react-navigation";

import { Timer } from "@components/Timer";
import { Button } from "@components/Button";
import { Routes } from "@common/Routes";
import { Divider } from "@components/Divider";

import { GameScreenContainer } from "./GameScreenContainer";
import { Player } from "./Player";
import { PlayerSectionContainer } from "./PlayerSectionContainer";
import { Race } from "./Race";

interface GameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const GameScreen: React.FunctionComponent<GameScreenProps> = ({
  navigation,
}) => {
  const [raceTo, setRaceTo] = useState(3);
  return (
    <GameScreenContainer>
      <Race
        defaultRaceTo={raceTo}
        onRaceToChange={newValue => setRaceTo(newValue)}
      />
      <PlayerSectionContainer>
        <Player index={1} min={0} max={raceTo} />
        <Divider vertical />
        <Player index={2} min={0} max={raceTo} />
      </PlayerSectionContainer>
      <Timer defaultDuration={10} />
      {/* <Button
        text="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      /> */}
    </GameScreenContainer>
  );
};
