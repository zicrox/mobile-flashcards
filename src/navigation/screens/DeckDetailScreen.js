import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';

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
  
  // In React navigation v1
  // getNavigationParams = () => this.props.navigation.state.params || {};
  
  // In React navigation v2 with "getParam"
  getNavParamDeck = this.props.navigation.getParam('deck')[1];
  
  componentDidMount(){
    // console.log(this.props.screenProps);
    // console.log(Object.keys(props.screenProps));
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <View style={styles.deckInfo}>
            <Text style={styles.textTitle}>{this.getNavParamDeck.title}</Text>
            <Text style={styles.textInfo}>{this.getNavParamDeck.questions.length} cards</Text>
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
    flexDirection: 'row',
    alignItems: 'flex-end', // NOTE why
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    padding: 5,
    // backgroundColor: '#FBEBF3',
  },
});