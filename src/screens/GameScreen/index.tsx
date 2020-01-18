import React from "react";
import { NavigationScreenProp } from "react-navigation";

import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { Routes } from "@screens/Routes";

import { GameScreenContainer } from "./GameScreenContainer";
import { Timer } from "@components/Timer";

interface GameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const GameScreen: React.FunctionComponent<GameScreenProps> = ({
  navigation,
}) => {
  return (
    <GameScreenContainer>
      <Text>
        This is the game screen.
        {"\n"}
        Show current player's score and shot clock here.
      </Text>
      <Button
        title="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      />
      <Timer/>
    </GameScreenContainer>
  );
};
