import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Card, QuizComplete } from '../../Components';

// Displays the percentage correct once the quiz is complete
// DONE the number of cards left in the quiz
export default class QuizScreen extends React.Component {
  state = {
    cardCounter      : 0,
    correctCounter   : 0,
    inCorrectCounter : 0,
  }
  
  navParamDeck = this.props.navigation.getParam('deck');
  
  _response = (correct) => {
    if(this.state.cardCounter <= this.navParamDeck.questions.length - 1){
      this.setState((prevState) => {
        const cardCounter = prevState.cardCounter + 1
        const correctCounter   = correct ? prevState.correctCounter + 1 : prevState.correctCounter;
        const inCorrectCounter = !correct ? prevState.inCorrectCounter + 1 : prevState.inCorrectCounter;
        return ({ cardCounter, correctCounter, inCorrectCounter });
      });
    }
  }
  
  onCorrect   = () => this._response(true);
  onInCorrect = () => this._response(false);
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.cardCounter <= (this.navParamDeck.questions.length - 1) ? (
          <Card
            cardCounter=  {this.state.cardCounter}
            navParamDeck= {this.navParamDeck}
            onCorrect=    {this.onCorrect}
            onInCorrect=  {this.onInCorrect}
          />
        ):(
          <QuizComplete
            navigationGoBack= {this.props.navigation.goBack}
            cardCounter=      {this.state.cardCounter}
            correctCounter=   {this.state.correctCounter}
            inCorrectCounter= {this.state.inCorrectCounter}
          />
        )}
      </View>
    );
  }
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
    paddingTop: 10,
  },
});
