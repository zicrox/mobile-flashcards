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

export default class UselessTextInput extends React.Component {
  state = { textInput  : 'Deck Title',
            focusInput : false,
          };
  
  submit = () => {
    console.log(this.state.textInput.replace(/^\s+/g, '').length);
    console.log(this.state.focusInput);
    if(!this.state.focusInput || !this.state.textInput.replace(/^\s+/g, '').length){
      Alert.alert('Deck Title is required');
      return;
    }
    if(this.props.screenProps.addDeck({title: this.state.textInput})) {
      Keyboard.dismiss();
      // Timeout for dismiss the damned keyboard
      setTimeout(() => {
        Alert.alert('New deck created', '',[{onPress: () => this.props.navigation.navigate('Decks')}]);
      }, 300);
    } else {
      Alert.alert('This deck arleady exist');
    }
  }
  
  render() {
    return (
      <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>What is the title of your new deck?</Text>
          </View>
          <View style={{padding: 20}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(textInput) => this.setState({textInput: textInput})}
              onFocus={() => this.setState({textInput: '', focusInput: true})}
              value={this.state.textInput}
            />
          </View>
          <View style={styles.submitButton}>
            <Button
              onPress={this.submit}
              title="Submit"
            />
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
  containerTitle: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 2,
    backgroundColor: '#FBEBF3',
    paddingLeft: 10,
  },
  submitButton: {
    padding: 5,
    backgroundColor: '#FBEBF3'
  },
});