import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

// React class extends components
class DecksScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Decks screen</Text>
      </View>
    )
  }
}

// react stateless functional component
const NewDeckScreen = () => (
  <View style={styles.container}>
    <Text>NewDeck screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Navigator = TabNavigator({
  Decks : { screen: DecksScreen },
  NewDeck : { screen: NewDeckScreen }
});


// It is seems that expo do not allow "functional component" for de "registerRootComponent"
// https://docs.expo.io/versions/latest/sdk/register-root-component.html
export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}
