import React from "react";

import { Input } from "@components/Input";
import { PlayerContainer } from "./PlayerContainer";

interface Player {
  playerNumber: number;
}

export const Player: React.FunctionComponent<Player> = ({ playerNumber }) => {
  return (
    <PlayerContainer>
      <Input
        label={`Player ${playerNumber}`}
        placeholder={`Player ${playerNumber}`}
      />
    </PlayerContainer>
  );
};
