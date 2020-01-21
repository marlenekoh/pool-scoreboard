import React, { useState } from "react";
import _ from "lodash";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Colors } from "@common/Colors";

import { FoulGroupContainer } from "./FoulGroupContainer";
import { FoulContainer } from "./FoulContainer";
import { FoulButtonGroupContainer } from "./FoulButtonGroupContainer";

export const Foul: React.FunctionComponent = () => {
  const [fouls, setFouls] = useState(0);

  const isFoul = (foulIndex: number) => {
    return fouls > foulIndex - 1;
  };

  const handleOnFoulPress = (foulIndex: number) => {
    setFouls(fouls == foulIndex ? fouls - 1 : foulIndex);
  };

  return (
    <FoulContainer>
      <FoulGroupContainer>
        <Text h4 bold uppercase>
          Fouls
        </Text>
        <Button minimal icon={"refresh-cw"} onPress={() => setFouls(0)} />
      </FoulGroupContainer>
      <FoulButtonGroupContainer>
        {_.map([1, 2, 3], index => (
          <Button
            minimal
            key={index}
            icon={isFoul(index) ? "x-circle" : "circle"}
            iconColor={isFoul(index) ? Colors.danger : Colors.black}
            onPress={() => handleOnFoulPress(index)}
          />
        ))}
      </FoulButtonGroupContainer>
    </FoulContainer>
  );
};
