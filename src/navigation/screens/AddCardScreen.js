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
  
  state = { 
    textQuestion : 'Question',
    textAnswer   : 'Answer',
    focusQuestion : false,
    focusAnswer : false,
  };
  
  // TODO finish the interface and the NewDeck (more space is good)
  // TODO make addCard method in App.js
  submit = () => {
    if(!this.state.focusQuestion || !this.state.textQuestion.replace(/^\s+/g, '').length){
      Alert.alert('Card question is required');
      return;
    }
    if(!this.state.focusAnswer || !this.state.textAnswer.replace(/^\s+/g, '').length){
      Alert.alert('Card answer is required');
      return;
    }
    // if(this.props.screenProps.addDeck({title: this.state.textQuestion})) {
    if(true) {
      Keyboard.dismiss();
      // Timeout for dismiss the damned keyboard
      setTimeout(() => {
        Alert.alert('New deck created');
      }, 300);
    } else {
      Alert.alert('This deck arleady exist');
    }
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