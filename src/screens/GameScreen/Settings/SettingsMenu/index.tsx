import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { Button } from "@components/Button";

import { SettingsMenuContainer } from "./SettingsMenuContainer";

export const SettingsMenu: React.FunctionComponent = () => {
  return (
    <SettingsMenuContainer>
      <Button
        title="  New Game      "
        type="clear"
        icon={<Icon name="plus" />}
      />
    </SettingsMenuContainer>
  );
};
