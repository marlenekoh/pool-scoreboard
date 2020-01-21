import React, { useState } from "react";

import { Input } from "@components/Input";

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
  const [name, setName] = useState(`Player ${index}`);

  return (
    <PlayerContainer>
      <NameInputContainer>
        <Input
          bold
          showSubmitButtonOnFocus
          size="medium"
          autoCorrect={false}
          placeholder={`Name`}
          onChangeText={text => setName(text)}
          value={name}
        />
      </NameInputContainer>
      <Score {...otherProps} />
      <Foul />
    </PlayerContainer>
  );
};
