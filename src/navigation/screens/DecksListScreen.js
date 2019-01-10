import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default DecksListScreen = (props) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <ScrollView>
        {Object.entries(props.screenProps.state).map((deck) => (
          <TouchableOpacity 
            key={deck[0]}
            style={styles.touchableOpacity}
            activeOpacity={0.5}
            onPress = {() => props.navigation.navigate('DeckDetail', { 'deck': deck[1] })}
            >
            <View style={styles.deckInfo}>
              <Text style={styles.textTitle}>{deck[1].title}</Text>
              <Text style={styles.textInfo}>{deck[1].questions.length} cards</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </View>
);

DecksListScreen.navigationOptions = {
  headerTitle: 'Decks',
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
  deckInfo: {
    backgroundColor: '#DDEBF8',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 15,
    padding: 5,
  },
  touchableOpacity: {
    backgroundColor: '#ABCDEF',
  },
});
