import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { Button } from "@components/Button";

import { SettingsButtonContainer } from "./SettingsButtonContainer";
import { SettingsMenu } from "../SettingsMenu";

export const SettingsButton: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <SettingsMenu />}
      <SettingsButtonContainer>
        <Button
          type="clear"
          icon={<Icon name="cog" size={32} color="black" />}
          onPress={toggleIsMenuOpen}
        />
      </SettingsButtonContainer>
    </>
  );
};
