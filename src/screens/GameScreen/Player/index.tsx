import React,{ useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "@components/Input";
import { PlayerContainer } from "./PlayerContainer";

const AERON = '../../../components/Images/Aeron_drunk.jpeg'

const CROSS = '../../../components/Images/hackathon_cross.png'

interface Player {
  playerNumber: number;
}

export const Player: React.FunctionComponent<Player> = ({ playerNumber }) => {
	const [isFoul1,setIsFoul1] = useState(AERON);
	const [isFoul2,setIsFoul2] = useState(AERON);
	const [isFoul3,setIsFoul3] = useState(AERON);
const noFouls = () => {
	setIsFoul1(true);
	setIsFoul2(true);
	setIsFoul3(true);
};
const activateFoul1 = () => {
	if(isFoul2 && isFoul3) {
		setIsFoul1(!isFoul1);
	};
};
const activateFoul2 = () => {
	if(!isFoul1 && isFoul3){
		setIsFoul2(!isFoul2);
	};
};
const activateFoul3 = () => {
	if(!(isFoul1 || isFoul2)) {
		setIsFoul3(!isFoul3);
	}
}
  return (
    <PlayerContainer>
      <Input
        label={`Player ${playerNumber}`}
        placeholder={`Player ${playerNumber}`}
      />

      <View>
		<View style={{flexDirection: 'row',
					margin: 10}}>      
	      	<Text>
      			Foul
      		</Text>
      		<TouchableOpacity onPress={noFouls}>
          		<Icon name="refresh" size={20} color="black" />
      		</TouchableOpacity>
      	</View>
      	<View style={{flexDirection: 'row'}}>
      		<TouchableOpacity onPress={activateFoul1}>
      			<Image style={{height: 50, width: 50}} source={isFoul1 ? require(AERON) : require(CROSS)}/>
      		</TouchableOpacity>
      		<TouchableOpacity onPress={activateFoul2}>
      			<Image style={{height: 50, width: 50}} source={isFoul2 ? require(AERON) : require(CROSS)}/>      	
      		</TouchableOpacity>
      		<TouchableOpacity onPress={activateFoul3}>
      			<Image style={{height: 50, width: 50}} source={isFoul3 ? require(AERON) : require(CROSS)}/>      	
      		</TouchableOpacity>
      	</View>
      </View>
    </PlayerContainer>
  );
};
