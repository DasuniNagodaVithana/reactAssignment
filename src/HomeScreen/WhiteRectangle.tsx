import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function WhiteRectangle() {
  return (
    <View style={styles.rectangle}>
      <Text style={styles.whiteText}>let's explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    height: 230,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  whiteText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WhiteRectangle;
