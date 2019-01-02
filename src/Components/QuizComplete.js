import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default QuizComplete = (props) => (
  <View style={styles.card}>
    <View style={{flex: 1, alignSelf: 'stretch', marginTop: 40}}>
      <Text style={styles.textTitle}>{"Quiz complete!"}</Text>
    </View>
    <View style={{flex: 3}}>
      <Text style={[styles.textTitle, {margin:10}]}>{"Stats:"}</Text>
      <Text style={styles.textStats}>{"Total cards: "+props.cardCounter}</Text>
      <Text style={styles.textStats}>{"Correct: "+props.correctCounter}</Text>
      <Text style={styles.textStats}>{"Incorrect: "+props.inCorrectCounter}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#88bea3',
    alignItems: 'center',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  textStats: {
    fontSize: 18,
    color: '#696c6f',
    alignSelf: 'center',
  },
});
