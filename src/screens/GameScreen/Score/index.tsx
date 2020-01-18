import React from "react";

import { Input } from "@components/Input";
import { ScoreContainer } from "./ScoreContainer";
import Icon from "react-native-vector-icons/FontAwesome";
import NumericInput from "react-native-numeric-input";

interface ScoreProps {
  maxValue: number;
}

export const Score: React.FunctionComponent<ScoreProps> = props => {
  return (
    <ScoreContainer>
      <NumericInput
        type="plus-minus"
        onChange={value => console.log(value)}
        rightButtonBackgroundColor="#19a823"
        leftButtonBackgroundColor="#cf0606"
        minValue={0}
        maxValue={props.maxValue} //let user set
        rounded={true}
        iconSize={40}
        totalHeight={70}
        totalWidth={150}
        editable={false}
      />
    </ScoreContainer>
  );
};
