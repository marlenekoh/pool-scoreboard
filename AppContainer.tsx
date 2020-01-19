import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { HomeScreen } from "@screens/HomeScreen";
import { GameScreen } from "@screens/GameScreen";
import { Routes } from "@common/Routes";
import { TransitionSpec } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { Easing } from "react-native";

const transitionConfig: TransitionSpec = {
  animation: "timing",
  config: {
    duration: 0, // remove slide transition
    easing: Easing.linear,
  },
};

const MainNavigator = createStackNavigator(
  {
    [Routes.HOME]: { screen: HomeScreen },
    [Routes.GAME]: { screen: GameScreen },
  },
  {
    headerMode: "none",
    defaultNavigationOptions: {
      transitionSpec: {
        open: transitionConfig,
        close: transitionConfig,
      },
    },
  }
);

export const AppContainer = createAppContainer(MainNavigator);
