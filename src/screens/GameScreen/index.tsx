import React from "react";
import { NavigationScreenProp } from "react-navigation";

import { Timer } from "@components/Timer";
import { Button } from "@components/Button";
import { Routes } from "@common/Routes";

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
  return (
    <GameScreenContainer>
      <Race />
      <PlayerSectionContainer>
        <Player index={1} />
        <Player index={2} />
      </PlayerSectionContainer>
      <Timer duration={10} />
      <Button
        text="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      />
    </GameScreenContainer>
  );
};
