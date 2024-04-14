import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Diet = () => {
  return (
    <View style={styles.container}>
      <Text>Hello!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Diet;
