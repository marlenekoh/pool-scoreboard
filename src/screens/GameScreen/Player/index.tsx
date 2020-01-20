import React from "react";

import { Input } from "@components/Input";
import { Text } from "@components/Text";

import { Score } from "./Score";
import { PlayerContainer } from "./PlayerContainer";
import { NameInputContainer } from "./NameInputContainer";

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
        <Text bold uppercase h4>
          {`Player ${index}`}
        </Text>
        <Input
          showSubmitButtonOnFocus
          autoCorrect={false}
          placeholder="Enter Name"
        />
      </NameInputContainer>
      <Score {...otherProps} />
    </PlayerContainer>
  );
};
