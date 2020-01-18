import React from "react";
import { CheckBox as FoulIcon } from 'react-native-elements';

export const CheckBox = () => {
  return (
    <FoulIcon
      style={{flex: 1, padding: 10}}
      center
      title='Click Here to Remove This Item'
      iconRight
      iconType='material'
      checkedIcon='clear'
      uncheckedIcon='add'
      checkedColor='red'
    />
  )
}

