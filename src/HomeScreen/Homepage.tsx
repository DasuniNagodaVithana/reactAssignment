import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
export default function Homepage() {
  return (
    <View>
      <ImageBackground source={require('../assets/images/image2.jpg')} 
      style={{height:'100%',width:'100%',borderRadius:5,
      }}/>
      <CustomText>Welcome</CustomText>
    </View>
  );
}
