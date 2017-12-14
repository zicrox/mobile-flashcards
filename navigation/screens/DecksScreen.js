import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';

export default () => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.deckInfo}>
        <Text style={styles.textTitle}>Title</Text>
        <Text style={styles.textInfo}>info</Text>
      </View>
      <TouchableOpacity 
        style={styles.touchableHighlight}
        activeOpacity={0.5}
        onPress = { ()=> {console.log("TouchableHighlight")} }
        >
        <View style={styles.deckInfo}>
          <Text style={styles.textTitle}>Title</Text>
          <Text style={styles.textInfo}>info</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABCDEF',
    alignItems: 'stretch',
    paddingTop: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInfo: {
    color: 'grey',
  },
  deckInfo: {
    flex: 1,
    backgroundColor: '#ABEEEF',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
  touchableHighlight: {
    backgroundColor: '#ABCDEF',
  },
});