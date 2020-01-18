import React from "react";
import { NavigationScreenProp } from "react-navigation";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Routes } from "@screens/Routes";

import { GameScreenContainer } from "./GameScreenContainer";

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
        text="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      />
    </GameScreenContainer>
  );
};
