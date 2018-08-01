import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

export default class DeckDetailScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Deck detail',
    headerStyle: {
      backgroundColor: '#6b6be3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  
  getNavigationParams = () => this.props.navigation.state.params || {};
  
  componentDidMount(){
    // console.log(props.screenProps);
    // console.log(Object.keys(props.screenProps));
    // console.log(this.props);
    // console.log(this.getNavigationParams());
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{alignItems: 'center', paddingTop: 10}}>
          <Text style={styles.textTitle}>Your decks list</Text>
        </View> */}
        <View style={styles.deckInfo}>
          <Text style={styles.textTitle}>{this.getNavigationParams().deck[1].title}</Text>
          <Text style={styles.textInfo}>{this.getNavigationParams().deck[1].questions.length} cards</Text>
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