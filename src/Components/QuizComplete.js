import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default QuizComplete = (props) => (
  <View style={styles.card}>
    <View style={{flex: 1, marginTop: 40}}>
      <Text style={styles.textTitle}>{"Quiz complete!"}</Text>
    </View>
    <View style={{flex: 3, alignSelf: 'stretch'}}>
      <View style={{backgroundColor: '#DDEBF8', borderRadius: 10, margin: 30, paddingVertical: 15}}>
        <Text style={[styles.textTitle, {margin:10}]}>{"Stats"}</Text>
        <View style={styles.stats}>
          <Text style={styles.textStats}>{"Correct: "}</Text>
          <Text style={styles.textStats}>{props.correctCounter}</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.textStats}>{"Incorrect: "}</Text>
          <Text style={styles.textStats}>{props.inCorrectCounter}</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.textStats}>{"Total cards: "}</Text>
          <Text style={styles.textStats}>{props.cardCounter}</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.textStats}>{"Score: "}</Text>
          <Text style={styles.textStats}>{((props.correctCounter/props.cardCounter)*100).toFixed(2)+" %"}</Text>
        </View>
      </View>
    </View>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        onPress={() => props.navigationGoBack()}
        title="Deck detail"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#88bea3',
    alignItems: 'center',
    margin: 30,
    marginHorizontal: 15,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textStats: {
    fontSize: 18,
    color: '#696c6f',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 15,
    marginHorizontal: 35,
    // backgroundColor: 'white',
  },
});
