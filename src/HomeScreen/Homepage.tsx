import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';

export default function Homepage() {
  return (
    <View>
      <ImageBackground source={require('../assets/images/image2.jpg')} 
      style={{height:'100%',width:'100%',borderRadius:5,
      }}/>
      <Text style={{position:'absolute',fontSize:30,color:'purple',marginTop:25,padding:20}}>Homepage</Text>
    </View>
  );
}
