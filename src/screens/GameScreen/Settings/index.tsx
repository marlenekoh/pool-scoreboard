import React, { useState } from "react";

import { Button } from "@components/Button";

import { SettingsMenu } from "./SettingsMenu";
import { SettingsContainer } from "./SettingsContainer";

export const Settings: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SettingsContainer>
      {isOpen && <SettingsMenu />}
      <Button icon="settings" onPress={() => setIsOpen(!isOpen)} bold />
    </SettingsContainer>
  );
};
