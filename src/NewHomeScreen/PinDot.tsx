
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PinDotProps {
  filled: boolean;
}

const PinDot: React.FC<PinDotProps> = ({ filled }) => {
  return (
    <View
      style={[
        styles.dotWithoutFill,
        filled && styles.dotWithFill,
      ]}
    ></View>
  );
};

const styles = StyleSheet.create({
  dotWithoutFill: {
    width: 15,
    height: 15,
    borderRadius: 8,
    borderWidth: 2,
    marginHorizontal: 11,
    marginBottom: 10,
    backgroundColor: '#FAFAFA',
    borderColor: '#5A7FD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotWithFill: {
    width: 15,
    height: 15,
    borderRadius: 8,
    marginHorizontal: 11,
    marginBottom: 10,
    backgroundColor: '#5A7FD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PinDot;
