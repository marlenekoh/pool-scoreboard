import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

import { Input } from "@components/Input";
import { getFontSizeFromButtonSize } from "@common/getFontSizeFromButtonSize";

import { Score } from "./Score";
import { PlayerContainer } from "./PlayerContainer";
import { NameInputContainer } from "./NameInputContainer";
import { Foul } from "./Foul";

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
