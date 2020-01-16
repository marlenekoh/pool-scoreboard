import React from "react";
import { StatusBar } from "react-native";

import { AppContainer } from "./AppContainer";

const App: React.FunctionComponent = () => {
  // TODO: Load async fonts here
  // https://docs.expo.io/versions/latest/guides/using-custom-fonts/
  return (
    <>
      <StatusBar hidden />
      <AppContainer />
    </>
  );
};

export default App;
