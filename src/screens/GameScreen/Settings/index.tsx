import React, { useState } from "react";

import { Button } from "@components/Button";

import { SettingsMenu } from "./SettingsMenu";
import { SettingsContainer } from "./SettingsContainer";

interface SettingsProps extends React.ComponentProps<typeof SettingsMenu> {}

export const Settings: React.FunctionComponent<SettingsProps> = ({
  onGameRestart,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SettingsContainer>
      {isOpen && (
        <SettingsMenu
          onGameRestart={() => {
            onGameRestart();
            setIsOpen(false);
          }}
        />
      )}
      <Button icon="settings" onPress={() => setIsOpen(!isOpen)} bold />
    </SettingsContainer>
  );
};
