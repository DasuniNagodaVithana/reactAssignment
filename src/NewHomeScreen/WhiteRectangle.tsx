import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function WhiteRectangle() {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.rectangle}>
      <Text style={styles.whiteText}>Let's explore</Text>
      <Text style={styles.largeWhiteText}>Your Dream Vacation</Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('Get Started clicked!')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
  largeWhiteText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 54,
    width:200,
    
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WhiteRectangle;
