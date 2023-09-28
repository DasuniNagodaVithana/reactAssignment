import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const TravelCustomText = (props: any) => {
  return (
    <View>
      <Text style={styles.customText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'Sriracha-Regular', 
    fontStyle: 'italic',
    fontSize: 50,
    color: '#73CCCC',
    fontWeight: '700',
    position: 'absolute',
    marginLeft: 10,
    marginTop: 50,
  },
});

export default TravelCustomText;
