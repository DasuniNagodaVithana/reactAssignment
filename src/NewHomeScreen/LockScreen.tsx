
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import PinDot from './PinDot';
import KeypadButton from './KeypadButton';

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type LockScreenProps =  NativeStackScreenProps<RootStackParamList,"LockScreen">


const LockScreen: React.FC<LockScreenProps> = ({navigation}) => {
  // Define the correct PIN
  const correctPIN = '1234';
  // Maximum incorrect
  const maxAttempts = 3;
  // Lockout duration 1 minute
  const lockoutDuration = 60 * 1000;

  const rows: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
  const keypadData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const [dotStates, setDotStates] = useState<boolean[]>([false, false, false, false]);
  const [enteredPIN, setEnteredPIN] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(maxAttempts);
  const [isLocked, setIsLocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [countdown, setCountdown] = useState(0);

  const handleKeyPress = (digit: number) => {
    if (!isLocked && enteredPIN.length < 4) {
      const newDotStates = [...dotStates];
      newDotStates[enteredPIN.length] = true;
      setDotStates(newDotStates);
      setEnteredPIN(enteredPIN + digit.toString());
    }
  };

  const handleDelete = () => {
    if (!isLocked && enteredPIN.length > 0) {
      const newDotStates = [...dotStates];
      newDotStates[enteredPIN.length - 1] = false;
      setDotStates(newDotStates);
      setEnteredPIN(enteredPIN.slice(0, -1));
    }
  };

  const handleOK = () => {
    if (enteredPIN === correctPIN) {
      navigation.navigate('Viewpage');
      // Alert.alert('Unlocked', 'You entered the correct password.', [
      //   {
      //     text: 'OK',
      //     onPress: () => {
      //       // Reset attempts remaining when correct PIN is entered
      //       setRemainingAttempts(maxAttempts);
      //       clearDots();
      //     },
      //   },
      // ]);
    } else {
      Alert.alert('Incorrect PIN', 'You entered an incorrect password.');
      handleIncorrectAttempt();
    }
  };

  const handleIncorrectAttempt = () => {
  
    if (remainingAttempts > 1) {
      const message = 'You entered a wrong password.';
      setErrorMessage(message);
      Alert.alert('Incorrect PIN', message, [
        {
          text: 'OK',
          onPress: () => {
        
            clearDots();
            setRemainingAttempts(remainingAttempts - 1);
            setErrorMessage('');
            
          },
        },
      ]);
    } else {
      setIsLocked(true);
      setCountdown(lockoutDuration / 1000);
      const message = ' Keypad locked for 1 minute.';
      setErrorMessage(message);
      setTimeout(() => {
        setIsLocked(false);
        setRemainingAttempts(maxAttempts);
        clearDots();
        setCountdown(0);
        setErrorMessage('');
      }, lockoutDuration);
    }
  };

  const clearDots = () => {
    setDotStates([false, false, false, false]);
    setEnteredPIN('');
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isLocked && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isLocked, countdown]);

  const renderKeypadItem = ({ item }: { item: number }) => (
    <KeypadButton
      number={item}
      onPress={() => handleKeyPress(item)}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.enterPasscode}>Enter Passcode</Text>
        {remainingAttempts < maxAttempts && (
          <Text style={styles.countdownText}>{`${remainingAttempts} attempts remaining`}</Text>
        )}
        {isLocked && countdown > 0 && (
          <Text style={styles.countdownText}>{`Screen Locked: ${countdown} seconds remaining`}</Text>
        )}
        <View style={styles.pinBox}>
          {dotStates.map((filled, index) => (
            <PinDot key={index} filled={filled} />
          ))}
        </View>
        <View style={styles.numberPadContainer}>
          <FlatList
            data={keypadData}
            numColumns={3}
            renderItem={renderKeypadItem}
            keyExtractor={(item) => item.toString()}
            contentContainerStyle={styles.keypadAdjustment}
          />
        </View>
        <View style={styles.okAndDeleteContainer}>
          <View style={styles.keypadDirection}>
            {/* The OK and Delete buttons */}
            <KeypadButton number="OK" onPress={handleOK} />
            <KeypadButton number="Delete" onPress={handleDelete} />
          </View>
        </View>
        {/*errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>*/}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterPasscode: {
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#5A7FD6',
    marginBottom: 10,
    marginTop: 100,
  },
  pinBox: {
    marginTop: 15,
    marginBottom: 75,
    flexDirection: 'row',
  },
  keypadAdjustment: {
    alignItems: 'center',
  },
  keypadDirection: {
    flexDirection: 'row',
  },
  okAndDeleteContainer: {
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  okDeleteButton: {
    marginHorizontal: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 100,
  },
  countdownText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'red',
    marginTop: 20,
  },
  errorText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'red', // Error color
    marginTop: 10,
    marginBottom: 15,
  },
  numberPadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
});

export default LockScreen;

