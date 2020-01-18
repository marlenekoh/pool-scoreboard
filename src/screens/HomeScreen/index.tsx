import React from "react";
import { NavigationScreenProp } from "react-navigation";

import { Button } from "@components/Button";
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
      <Text placeholder="Player 1">
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
