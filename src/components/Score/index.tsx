import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import NumericInput from 'react-native-numeric-input';

export const Score: React.FunctionComponent = () => {
  return <NumericInput type='plus-minus' onChange={value => console.log(value)} />
};