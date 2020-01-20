import React from "react";
import { NavigationScreenProp } from "react-navigation";

import { Timer } from "@components/Timer";
import { Text } from "@components/Text";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Routes } from "@common/Routes";

import { GameScreenContainer } from "./GameScreenContainer";
import { PlayerSection } from "./PlayerSection";

interface GameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const GameScreen: React.FunctionComponent<GameScreenProps> = ({
  navigation,
}) => {
  return (
    <GameScreenContainer>
      <Button
        text="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      />
      <PlayerSection index={1} />
      <Timer duration={10} />
    </GameScreenContainer>
  );
};
