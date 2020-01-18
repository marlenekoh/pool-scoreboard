import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { Button } from "@components/Button";

import { SettingsButtonContainer } from "./SettingsButtonContainer";

export const SettingsButton: React.FunctionComponent = () => {
  return (
    <SettingsButtonContainer>
      <Button type="clear" icon={<Icon name="cog" size={48} color="black" />} />
    </SettingsButtonContainer>
  );
};
