import React from "react";

import { Label } from "@components/Label";
import { Input } from "@components/Input";

import { Score } from "./Score";

interface PlayerSectionProps {
  index: number;
}

export const PlayerSection: React.FunctionComponent<PlayerSectionProps> = ({
  index,
}) => {
  return (
    <>
      <Label title={`Player ${index}`} />
      <Input placeholder="Enter Name" />
      <Score max={5} />
    </>
  );
};
