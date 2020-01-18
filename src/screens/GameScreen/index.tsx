import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { View, StyleSheet } from "react-native";

import { Button } from "@components/Button";
import { Routes } from "@screens/Routes";
import { Timer } from "@components/Timer";
import { Score } from "@components/Score";

import { GameScreenContainer } from "./GameScreenContainer";
import { SettingsButton } from "./Settings/SettingsButton";
import { Player } from "./Player";
import { PlayerSectionContainer } from "./PlayerSectionContainer";

interface GameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const GameScreen: React.FunctionComponent<GameScreenProps> = ({
  navigation,
}) => {
  return (
    <GameScreenContainer>
      <PlayerSectionContainer>
        <Player playerNumber={1} />
        <Player playerNumber={2} />
      </PlayerSectionContainer>
      <Timer />
      <Score />
      <View style={{flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: 100}}>
        <View>
          <Button
            title="Resume"/>
        </View>
        <View>
          <Button
            title="Reset"/>
        </View>
      </View>
      <SettingsButton />
      <Button
        title="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      />
    </GameScreenContainer>
  );
};

const styles = StyleSheet.create({
});