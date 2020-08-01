import React from "react";
import { StatusBar } from "react-native";
import { Audio } from "expo-av";

import { AppContainer } from "./AppContainer";

const App: React.FunctionComponent = () => {
  // TODO: Load async fonts here
  // https://docs.expo.io/versions/latest/guides/using-custom-fonts/

  // Load async sounds
  return (
    <>
      <StatusBar hidden />
      <AppContainer />
    </>
  );
};

export default App;
