import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

export default DeckDetailScreen = (props) => {
  
  // In React navigation v1
  // getNavigationParams = () => this.props.navigation.state.params || {};
  
  // In React navigation v2 with "getParam"
  const navParamDeck = props.navigation.getParam('deck');
  
  const onStartQuiz = () => {
    navParamDeck.questions.length ?
      props.navigation.navigate('QuizScreen', { 'deck': navParamDeck }) :
      Alert.alert('This deck do not have cards');
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.deck}>
        <View style={styles.deckInfo}>
          <Text style={styles.textTitle}>{navParamDeck.title}</Text>
          <Text style={styles.textInfo}>{navParamDeck.questions.length} cards</Text>
        </View>
        <View style={styles.actionButtons}>
          <Button
            onPress={() => console.log("go Add card")}
            title="Add card"
          />
          <Button
            onPress={onStartQuiz}
            title="Start Quiz"
          />
        </View>
      </View>
    </View>
  );
};

DeckDetailScreen.navigationOptions = {
  headerTitle: 'Deck detail',
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
  textInfo: {
    color: 'grey',
  },
  deck: {
    flex: 1,
    backgroundColor: '#DDEBF8',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    marginHorizontal: 15,
  },
  deckInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#FBEBF3',
  },
});