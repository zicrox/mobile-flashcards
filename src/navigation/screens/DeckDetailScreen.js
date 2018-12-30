import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

export default class DeckDetailScreen extends React.Component {
  
  static navigationOptions = {
    headerTitle: 'Deck detail',
  }
  
  // In React navigation v1
  // getNavigationParams = () => this.props.navigation.state.params || {};
  
  // In React navigation v2 with "getParam"
  getNavParamDeck = this.props.navigation.getParam('deck');
  
  onStartQuiz = () => {
    this.getNavParamDeck.questions.length ?
      this.props.navigation.navigate('QuizScreen', { 'deck': this.getNavParamDeck }) :
      Alert.alert('This deck do not have cards');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <View style={styles.deckInfo}>
            <Text style={styles.textTitle}>{this.getNavParamDeck.title}</Text>
            <Text style={styles.textInfo}>{this.getNavParamDeck.questions.length} cards</Text>
          </View>
          <View style={styles.actionButtons}>
            <Button
              onPress={() => console.log("go Add card")}
              title="Add card"
            />
            <Button
              onPress={this.onStartQuiz}
              title="Start Quiz"
            />
          </View>
        </View>
      </View>
    )
  }
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
  deck: {
    flex: 1,
    backgroundColor: '#DDEBF8',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
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