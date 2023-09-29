import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoutText}>Logout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Logout;
