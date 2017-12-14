import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button
} from 'react-native';

export default class UselessTextInput extends React.Component {
  state = { textInput: 'Deck Title' };
  
  changeInput = (textInput) => {
    this.setState({textInput: textInput});
    // console.log(this.props.screenProps);
  }
  
  render() {
    return (
      <TouchableWithoutFeedback onPress = { () => Keyboard.dismiss() }>
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>What is the title of your new deck?</Text>
          </View>
          <View style={{padding: 20}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(textInput) => this.changeInput(textInput)}
              value={this.state.textInput}
            />
          </View>
          <View style={{padding: 5, backgroundColor: '#FBEBF3' }}>
            <Button
              onPress={ () => console.log("press") }
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
});