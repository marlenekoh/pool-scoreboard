import React from "react";
import { NavigationScreenProp } from "react-navigation";

import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { Routes } from "@common/Routes";

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
        Player 1
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
