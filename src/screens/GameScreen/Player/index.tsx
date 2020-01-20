import React from "react";

import { Input } from "@components/Input";
import { Text } from "@components/Text";

import { Score } from "./Score";
import { PlayerContainer } from "./PlayerContainer";
import { NameInputContainer } from "./NameInputContainer";
import { Foul } from "./Foul";

interface PlayerProps extends React.ComponentProps<typeof Score> {
  index: number;
}

export const Player: React.FunctionComponent<PlayerProps> = ({
  index,
  ...otherProps
}) => {
  return (
    <PlayerContainer>
      <NameInputContainer>
        <Text h4 bold uppercase>
          {`Player ${index}`}
        </Text>
        <Input
          showSubmitButtonOnFocus
          autoCorrect={false}
          placeholder="Enter Name"
        />
      </NameInputContainer>
      <Score {...otherProps} />
      <Foul />
    </PlayerContainer>
  );
};
