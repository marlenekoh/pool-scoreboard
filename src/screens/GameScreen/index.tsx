import React from "react";
import { NavigationScreenProp } from "react-navigation";
import { View, StyleSheet } from "react-native";

import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { Routes } from "@screens/Routes";
import { Timer } from "@components/Timer";

import { GameScreenContainer } from "./GameScreenContainer";
import { Input } from "@components/Input";
import { SettingsButton } from "./Settings/SettingsButton";
import { Score } from "@components/Score";

interface GameScreenProps {
  navigation: NavigationScreenProp<any>;
}

export const GameScreen: React.FunctionComponent<GameScreenProps> = ({
  navigation,
}) => {
  return (
    <GameScreenContainer>
      <Input />
      <Button
        title="Click to go to Home Screen"
        onPress={() => navigation.navigate(Routes.HOME)}
      />
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
    </GameScreenContainer>
  );
};

const styles = StyleSheet.create({

});