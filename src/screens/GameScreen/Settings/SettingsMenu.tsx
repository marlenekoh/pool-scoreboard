import React from "react";

import { Menu, MenuItem, MenuHeader } from "@components/Menu";
import { Colors } from "@common/Colors";

interface SettingsMenuProps {
  onGameRestart: () => void;
}

export const SettingsMenu: React.FunctionComponent<SettingsMenuProps> = ({
  onGameRestart,
}) => {
  return (
    <Menu
      top
      right
      style={{
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 5,
      }}
    >
      <MenuHeader>Options</MenuHeader>
      <MenuItem icon="refresh-cw" text="Restart Game" onPress={onGameRestart} />
    </Menu>
  );
};
