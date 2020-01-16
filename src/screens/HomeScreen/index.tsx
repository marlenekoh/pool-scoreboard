import React from "react";
import { Button } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import { Text } from "@components/Text";
import { Routes } from "@screens/Routes";

import { HomeScreenContainer } from "./HomeScreenContainer";

interface HomescreenProps {
  navigation: NavigationScreenProp<any>;
}

export const HomeScreen: React.FunctionComponent<HomescreenProps> = ({
  navigation,
}) => {
  return (
    <HomeScreenContainer>
      <Text>
        This is the Home PAGE.
        {"\n"}
        Include options to create a new game.
      </Text>
      <Button
        title="Click to go to Game Screen"
        onPress={() => {
          navigation.navigate(Routes.GAME);
        }}
      />
    </HomeScreenContainer>
  );
};
