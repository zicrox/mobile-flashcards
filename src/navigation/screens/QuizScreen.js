import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default QuizScreen = (props) => {
  const getNavParamDeck = props.navigation.getParam('deck');
  return (
    <View style={styles.container}>
      <View style={styles.deck}>
        <Text style={styles.textTitle}>{"1/"+getNavParamDeck.questions.length}</Text>
        <Text style={styles.textTitle}>{getNavParamDeck.title}</Text>
      </View>
    </View>
  );
}

QuizScreen.navigationOptions = {
  headerTitle: 'Quiz',
  headerStyle: {
    backgroundColor: '#88bea3',
  },
}

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
  deck: {
    flex: 1,
    backgroundColor: '#DDEBF8',
    alignItems: 'center',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
  },
});
