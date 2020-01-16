import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Text } from 'react-native';

import { AppView } from "./AppView";

export default function App() {
  return (
    <AppView>
      <Text>Open up App.tsx to start working on your app!</Text>
    </AppView>
  );
}
