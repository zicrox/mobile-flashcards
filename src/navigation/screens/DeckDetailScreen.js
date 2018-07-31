import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default (props) => {
  
  // console.log(props.screenProps);
  // console.log(Object.keys(props.screenProps));
  
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', paddingTop: 10}}>
        <Text style={styles.textTitle}>Your decks list</Text>
      </View>
      <View style={styles.container}>
        
      </View>
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
    backgroundColor: '#DDEBF8',
    alignItems: 'center',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
  },
  touchableOpacity: {
    backgroundColor: '#ABCDEF',
  },
});