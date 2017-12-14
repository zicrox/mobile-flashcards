import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import initState from '../../initState';

export default (props) => {
  // Test concept: Navigator Props
  // https://reactnavigation.org/docs/navigators/tab#Navigator-Props
  props.screenProps();
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.entries(initState).map((deck) => (
          <TouchableOpacity 
            key={deck[0]}
            style={styles.touchableHighlight}
            activeOpacity={0.5}
            onPress = { ()=> {console.log("TouchableHighlight")} }
            >
            <View style={styles.deckInfo}>
              <Text style={styles.textTitle}>{deck[1].title}</Text>
              <Text style={styles.textInfo}>{deck[1].questions.length} cards</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
};

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