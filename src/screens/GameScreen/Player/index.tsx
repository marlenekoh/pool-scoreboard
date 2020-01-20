import React from "react";

import { Label } from "@components/Label";
import { Input } from "@components/Input";

import { Score } from "./Score";
import { PlayerContainer } from "./PlayerContainer";
import { NameInputContainer } from "./NameInputContainer";

interface PlayerProps {
  index: number;
}

export const Player: React.FunctionComponent<PlayerProps> = ({ index }) => {
  return (
    <PlayerContainer>
      <Label title={`Player ${index}`} />
      <NameInputContainer>
        <Input showSubmitButtonOnFocus placeholder="Enter Name" />
      </NameInputContainer>
      <Score max={5} />
    </PlayerContainer>
  );
};
