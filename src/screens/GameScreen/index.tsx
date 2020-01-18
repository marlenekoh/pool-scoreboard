import React from "react";
import { View } from "react-native";

import { Button } from "@components/Button";
import { Timer } from "@components/Timer";
import { Score } from "@components/Score";
import { CheckBox } from "@components/Checkbox";

import { GameScreenContainer } from "./GameScreenContainer";
import { SettingsButton } from "./Settings/SettingsButton";
import { Player } from "./Player";
import { PlayerSectionContainer } from "./PlayerSectionContainer";

export const GameScreen: React.FunctionComponent = () => {
  return (
    <GameScreenContainer>
      <PlayerSectionContainer>
        <Player playerNumber={1} />
        <Player playerNumber={2} />
      </PlayerSectionContainer>
      <Timer />
      <Score maxValue={5} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 100,
        }}
      >
        <View>
          <Button title="Resume" />
        </View>
        <View>
          <Button title="Reset" />
        </View>
      </View>
      <SettingsButton />
      <Button
        title="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      />
      <CheckBox />
      <SettingsButton />
    </GameScreenContainer>
  );
};
