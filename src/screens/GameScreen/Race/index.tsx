import React, { useState } from "react";

import { Text } from "@components/Text";

import { Input } from "@components/Input";

import { RaceContainer } from "./RaceContainer";

interface RaceProps {
  defaultRaceTo?: number;
  onRaceToChange: (raceTo: number) => void;
}

export const Race: React.FunctionComponent<RaceProps> = ({
  defaultRaceTo,
  onRaceToChange,
}) => {
  const [text, setText] = useState(`${defaultRaceTo}`);

  return (
    <RaceContainer>
      <Text h4>Race</Text>
      <Input
        h2
        selectTextOnFocus
        showSubmitButtonOnFocus
        keyboardType="number-pad"
        maxLength={3}
        textAlign="center"
        value={text}
        onChangeText={text => {
          setText(text);
          onRaceToChange(parseInt(text));
        }}
        onEndEditing={() => {
          if (!text.length) {
            setText("0");
          }
        }}
      />
    </RaceContainer>
  );
};
