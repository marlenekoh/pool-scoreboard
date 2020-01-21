import React, { useState } from "react";

import { Input } from "@components/Input";
import { Colors } from "@common/Colors";

import { Score } from "./Score";
import { Foul } from "./Foul";
import { PlayerContainer } from "./PlayerContainer";
import { NameInputContainer } from "./NameInputContainer";
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
  const shadowStyle = isCurrent
    ? {
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }
    : {};

  return (
    <PlayerContainer style={shadowStyle} isCurrentPlayer={isCurrent}>
      <NameInputContainer>
        <Input
          bold
          selectTextOnFocus
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
