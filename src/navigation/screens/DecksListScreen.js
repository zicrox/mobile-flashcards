import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

DecksListScreen = (props) => (
  <View style={styles.container}>
    {/* <View style={{alignItems: 'center', paddingTop: 10}}>
      <Text style={styles.textTitle}>Your decks list</Text>
    </View> */}
    <View style={styles.container}>
      <ScrollView>
        {Object.entries(props.screenProps.state).map((deck) => (
          <TouchableOpacity 
            key={deck[0]}
            style={styles.touchableOpacity}
            activeOpacity={0.5}
            onPress = {() => props.navigation.navigate('DeckDetail', { 'deck': deck })}
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
  title: 'Decks',
  headerStyle: {
    backgroundColor: '#6b6be3',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
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
    flex: 1,
    backgroundColor: '#DDEBF8',
    alignItems: 'center',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
  },
  touchableOpacity: {
    backgroundColor: '#ABCDEF',
  },
});

export default DecksListScreen;