import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text>NewDeck screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFABCD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});