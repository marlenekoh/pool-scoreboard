import React, { useState } from "react";
import { CheckBox as FoulIcon } from 'react-native-elements';

export const CheckBox = () => {
  const [isFoul, setIsFoul] = useState(false);

  const toggleIsFoul = () => {
    setIsFoul(!isFoul);
  };

  return (
    <FoulIcon
      center
      title='Foul'
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checked={isFoul}
      onPress={toggleIsFoul}
    />
  )
}

