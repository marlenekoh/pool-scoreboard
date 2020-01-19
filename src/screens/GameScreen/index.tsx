import React from "react";
import { NavigationScreenProp } from "react-navigation";

import { Timer } from "@components/Timer";
import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Routes } from "@common/Routes";
import { Colors } from "@common/Colors";

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
      <Timer isPlaying={true} duration={10} />
    </GameScreenContainer>
  );
};
