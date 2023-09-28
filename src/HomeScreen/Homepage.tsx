import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import TravelCustomText from './TravelCustomText';

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
            marginLeft: 85,
          }}
        />
      </ImageBackground>

      {/* Add the white rectangle here */}
      <WhiteRectangle />
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
  rectangle: {
    height: 50,
    backgroundColor: 'white', // Change the background color to white
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

function WhiteRectangle() {
  return <View style={styles.rectangle}></View>;
}
