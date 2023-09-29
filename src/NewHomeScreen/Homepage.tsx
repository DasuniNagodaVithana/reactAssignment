import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import TravelCustomText from './TravelCustomText';
import WhiteRectangle from './WhiteRectangle'; 

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type HomeProps =  NativeStackScreenProps<RootStackParamList,'Homepage'>
const Home = ({navigation}:HomeProps)=>{
  
}
export default function Homepage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/image2.jpg')}
        style={styles.backgroundImage}
      >
        <CustomText>Welcome</CustomText>
        <TravelCustomText>Dream Travel</TravelCustomText>
        <Image
          source={require('../assets/images/image3.png')}
          style={{
            height: 27,
            width: 27,
            position: 'absolute',
            top: -15,
            left: 200,
            marginTop: 70,
            marginLeft: 98,
          }}
        />

        
        <View style={styles.whiteRectangleContainer}>
          <WhiteRectangle /> 
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 5,
    position: 'relative',
  },
  whiteRectangleContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Position the white rectangle at the bottom
  },
});
