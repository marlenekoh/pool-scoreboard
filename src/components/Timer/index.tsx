import React from "react";
import CountDown from "react-native-countdown-component";
 

export const Timer: React.FunctionComponent = () => {
  return <CountDown
    until={10}
    onFinish={() => alert('finished')}
    onPress={() => alert('Starting Shot Clock')}
    timeToShow={['S']}
    digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
    digitTxtStyle={{color: '#1CC625'}}
    timeLabelStyle={{color: 'black', fontWeight: 'bold'}}
    size={20}
    />
};