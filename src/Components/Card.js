import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

export default Card = (props) => { 
  // console.log(props);
  return (
  <View style={styles.card}>
    <View style={{flex: 1, alignSelf: 'stretch'}}>
      <Text style={styles.textCardNumber}>{(props.cardCounter+1)+"/"+props.navParamDeck.questions.length}</Text>
      <Text style={styles.textTitle}>{props.navParamDeck.title}</Text>
    </View>
    <View style={{flex: 3}}>
      <Text style={styles.textQuestion}>{props.navParamDeck.questions[props.cardCounter].question}</Text>
      <Button
        onPress={() => console.log("go Answer")}
        title="Answer"
      />
    </View>
    <View style={styles.actionButtons}>
      <TouchableOpacity 
        style={styles.incorrectButton}
        activeOpacity={0.5}
        onPress = {props.onInCorrect}
        >
        <Text style={styles.textResponseButton}>{"Incorrect"}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.correctButton}
        activeOpacity={0.5}
        onPress = {props.onCorrect}
        >
        <Text style={styles.textResponseButton}>{"Correct"}</Text>
      </TouchableOpacity>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#f1f1ba',
    alignItems: 'center',
    margin: 30,
    marginHorizontal: 15,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#719e71',
    alignSelf: 'center',
  },
  textQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 20,
  },
  textCardNumber: {
    fontSize: 17,
    color: 'grey',
    alignSelf: 'flex-start',
    margin: 10,
    marginLeft: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 5,
  },
  correctButton: {
    backgroundColor: '#9ad89a',
    padding: 15,
    borderRadius: 10,
    margin: 5,
  },
  incorrectButton: {
    backgroundColor: '#d89a9a',
    padding: 15,
    borderRadius: 10,
    margin: 5,
  },
  textResponseButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
