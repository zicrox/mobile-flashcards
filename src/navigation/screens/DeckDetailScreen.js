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
        <View style={styles.deck}>
          <View style={styles.deckInfo}>
            <Text style={styles.textTitle}>{this.getNavigationParams().deck[1].title}</Text>
            <Text style={styles.textInfo}>{this.getNavigationParams().deck[1].questions.length} cards</Text>
          </View>
          <View style={styles.actionButtons}>
            <Button
              onPress={()=>console.log("go Add card")}
              title="Add card"
            />
            <Button
              onPress={()=>console.log("go Start Quiz")}
              title="Start Quiz"
            />
          </View>
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
  deck: {
    flex: 1,
    backgroundColor: '#DDEBF8',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
  },
  touchableOpacity: {
    backgroundColor: '#ABCDEF',
  },
  deckInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtons: {
    flex: 1,
    // alignItems: 'stretch', // NOTE why
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#FBEBF3'
  },
});