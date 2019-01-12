import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AddCardScreen extends React.Component {
  static navigationOptions = {
    title: 'New Card',
  };
  
  navParamDeck = this.props.navigation.getParam('deck');
  
  state = { 
    textQuestion : 'Question',
    textAnswer   : 'Answer',
    focusQuestion : false,
    focusAnswer : false,
  };
  
  // This method use a callback from setState to ensure the state is updated before show and pass params to next screen
  // This callback seems not necesary if the next screen use the "app" state instead of params
  _addCard = (callback) => this.props.screenProps.addCard({
    question: this.state.textQuestion,
    answer: this.state.textAnswer,
    deckTitle: this.navParamDeck.title,
  }, callback );
  
  
  submit = () => {
    if(!this.state.focusQuestion || !this.state.textQuestion.replace(/^\s+/g, '').length){
      Alert.alert('Card question is required');
      return;
    }
    if(!this.state.focusAnswer || !this.state.textAnswer.replace(/^\s+/g, '').length){
      Alert.alert('Card answer is required');
      return;
    }
    this._addCard(() => {
      Keyboard.dismiss();
        // Timeout for dismiss the damned keyboard
        setTimeout(() => {
          // console.log(this.props.screenProps.state[this.navParamDeck.title]);
          // Alert.alert('New card created', '',[{onPress: () => this.props.navigation.navigate('DecksList')}]);
          Alert.alert('New card created', '',[{onPress: () => this.props.navigation.navigate('DeckDetail', { 'deck': this.props.screenProps.state[this.navParamDeck.title] })}]);
        }, 300);
    });
  }
  
  render() {
    return (
      <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.containerInputs}>
            <Text style={styles.textTitle}>What is the question of your new card?</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(textQuestion) => this.setState({textQuestion: textQuestion})}
              onFocus={() => this.setState({textQuestion: '', focusQuestion: true})}
              value={this.state.textQuestion}
            />
            <Text style={styles.textTitle}>What is the answer of your new card?</Text>
            <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={10}
              onChangeText={(textAnswer) => this.setState({textAnswer: textAnswer})}
              onFocus={() => this.setState({textAnswer: '', focusAnswer: true})}
              value={this.state.textAnswer}
            />
          </View>
          <View style={{flex: 1}}>
            <View style={styles.submitButton}>
              <Button
                onPress={this.submit}
                title="Submit"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFABCD',
    justifyContent: 'center',
  },
  containerInputs: {
    flex: 7,
    margin: 20,
    marginTop: 40,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 2,
    backgroundColor: '#FBEBF3',
    paddingLeft: 10,
  },
  textArea: {
    height: 140,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 2,
    backgroundColor: '#FBEBF3',
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: '#FBEBF3',
    padding: 5,
  }
});