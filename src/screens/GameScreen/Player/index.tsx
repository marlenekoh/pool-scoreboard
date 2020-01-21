import React, { useState } from "react";

import { Input } from "@components/Input";

import { Score } from "./Score";
import { PlayerContainer } from "./PlayerContainer";
import { NameInputContainer } from "./NameInputContainer";
import { Foul } from "./Foul";
import { CurrentPlayerIcon } from "./CurrentPlayerIcon";

interface PlayerProps extends React.ComponentProps<typeof Score> {
  index: number;
  isCurrent: boolean;
}

export const Player: React.FunctionComponent<PlayerProps> = ({
  index,
  isCurrent,
  ...otherProps
}) => {
  const [name, setName] = useState(`Player ${index}`);

  return (
    <PlayerContainer>
      <NameInputContainer>
        {isCurrent && <CurrentPlayerIcon />}
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
