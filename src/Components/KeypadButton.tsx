
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface KeypadButtonProps {
  number: number | string;
  onPress: () => void;
}

const KeypadButton: React.FC<KeypadButtonProps> = ({ number, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.buttonsOnKeypad}
      onPress={onPress}
    >
      <Text style={styles.numbersOnKeypad}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonsOnKeypad: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginHorizontal: 11,
    marginBottom: 17,
    borderWidth: 2,
    backgroundColor: '#FAFAFA',
    borderColor: '#5A7FD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbersOnKeypad: {
    fontFamily: 'Roboto',
    fontSize: 21,
    color: '#5A7FD6',
  },
});

export default KeypadButton;
