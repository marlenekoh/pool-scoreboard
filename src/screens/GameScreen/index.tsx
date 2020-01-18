import React, { useState } from "react";
import { NavigationScreenProp } from "react-navigation";
import { View, StyleSheet } from "react-native";

import { Button } from "@components/Button";
import { Routes } from "@screens/Routes";
import { Timer } from "@components/Timer";

import { GameScreenContainer } from "./GameScreenContainer";
import { SettingsButton } from "./Settings/SettingsButton";
import { CheckBox } from "@components/Checkbox";
import { Player } from "./Player";
import { PlayerSectionContainer } from "./PlayerSectionContainer";

interface GameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const GameScreen: React.FunctionComponent<GameScreenProps> = ({
  navigation,
}) => {
  const [isTimeStart, setTimeStart] = useState(true);

  const [isReset, setIsReset] = useState(false);

  const startTime = () => {
    setIsReset(false);
    setTimeStart(true);
  };

  const endTime = () => {
    setIsReset(true);
    setTimeStart(false);
  };

  return (
    <GameScreenContainer>
      <PlayerSectionContainer>
        <Player playerNumber={1} />
        <Player playerNumber={2} />
      </PlayerSectionContainer>
      <Timer isTimeStart={isTimeStart} isReset={isReset} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 100,
        }}
      >
        {!isTimeStart && (
          <View>
            <Button title="Resume" onPress={startTime} />
          </View>
        )}
        <View>
          <Button
            title={isTimeStart ? "Stop" : "Reset"}
            onPress={() => {
              if (isTimeStart) {
                setTimeStart(false);
                setIsReset(false);
              } else {
                setIsReset(true);
              }
            }}
          />
          {/* TODO restart timer */}
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

const styles = StyleSheet.create({});
