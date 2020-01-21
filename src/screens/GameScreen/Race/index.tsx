import React, { useState } from "react";

import { Text } from "@components/Text";
import { Colors } from "@common/Colors";
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
      <Text h5 bold uppercase color={Colors.white}>
        Race
      </Text>
      <Input
        h2
        color={Colors.white}
        selectTextOnFocus
        showSubmitButtonOnFocus
        keyboardType="number-pad"
        maxLength={3}
        textAlign="center"
        value={text}
        onChangeText={text => {
          setText(text);
        }}
        onEndEditing={() => {
          const textToNumber = parseInt(text.trim());
          if (!text.length || textToNumber < 0 || isNaN(textToNumber)) {
            setText("0");
          }
          onRaceToChange(parseInt(text));
        }}
      />
    </RaceContainer>
  );
};
