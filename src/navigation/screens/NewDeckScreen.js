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

export default class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'New Deck',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-add" size={26} color={tintColor} />
    )
  };
  
  state = { 
    textInput  : 'Deck Title',
    focusInput : false,
  };
  
  submit = () => {
    if(!this.state.focusInput || !this.state.textInput.replace(/^\s+/g, '').length){
      Alert.alert('Deck Title is required');
      return;
    }
    if(this.props.screenProps.addDeck({title: this.state.textInput})) {
      Keyboard.dismiss();
      // Timeout for dismiss the damned keyboard
      setTimeout(() => {
        Alert.alert('New deck created', '',[{onPress: () => this.props.navigation.navigate('DecksList')}]);
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
            <Text style={styles.textTitle}>What is the title of your new deck?</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(textInput) => this.setState({textInput: textInput})}
              onFocus={() => this.setState({textInput: '', focusInput: true})}
              value={this.state.textInput}
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
    margin: 25,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 40,
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