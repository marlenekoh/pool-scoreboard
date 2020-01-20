import React, { useState } from "react";

import { Text } from "@components/Text";
import { Button } from "@components/Button";

import { FoulGroupContainer } from "./FoulGroupContainer";
import { FoulContainer } from "./FoulContainer";

export const Foul: React.FunctionComponent = () => {
  const [fouls, setFouls] = useState(0);

  const getFoulIcon = (foulIndex: number) => {
    return fouls > foulIndex - 1 ? "x-circle" : "circle";
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
      <FoulGroupContainer>
        <Button icon={getFoulIcon(1)} onPress={() => handleOnFoulPress(1)} />
        <Button icon={getFoulIcon(2)} onPress={() => handleOnFoulPress(2)} />
        <Button icon={getFoulIcon(3)} onPress={() => handleOnFoulPress(3)} />
      </FoulGroupContainer>
    </FoulContainer>
  );
};
