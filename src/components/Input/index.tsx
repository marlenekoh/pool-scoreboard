import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, StyleSheet } from 'react-native';
import { Input as ReactNativeInput } from 'react-native-elements';

export const Input = () => {
  return (
    <ReactNativeInput
    placeholder='Name'
    label='Player 1'
    style={styles.input}
  />
  )
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  }
})