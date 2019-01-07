
// DOCS: Navigation options resolution (How this works when there are multiple navigators)
// https://reactnavigation.org/docs/en/2.x/navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens

import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  createBottomTabNavigator, 
  createStackNavigator 
} from 'react-navigation';
import {
  DecksListScreen,
  NewDeckScreen,
  DeckDetailScreen,
  AddCardScreen,
  QuizScreen
} from './screens';

const DecksScreen = createStackNavigator({
  DecksList     : { screen: DecksListScreen },
  DeckDetail    : { screen: DeckDetailScreen },
  AddCardScreen : { screen: AddCardScreen },
  QuizScreen    : { screen: QuizScreen },
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#b99ad8',
    },
    // headerTintColor: '#fff',
    headerTitleStyle: {
      // fontWeight: 'bold',
      color: 'white'
    },
    // headerBackTitleStyle: {
    //   color: 'green',
    // },
  },
});
DecksScreen.navigationOptions = ({ navigation }) => {
  const tabBarLabel = 'Decks';
  const tabBarIcon = ({ tintColor }) => (<Ionicons name="ios-list" size={26} color={tintColor} />)
  const tabBarVisible = navigation.state.index > 0 ? false : true; // hide the tab bar if navigate away from first screen of the stack
  return { tabBarLabel, tabBarIcon, tabBarVisible };
};
// NOTE: The navigationOptions property vs configuration
// https://reactnavigation.org/docs/en/2.x/navigation-options-resolution.html#caution-the-navigationoptions-property-vs-configuration

const Navigator = createBottomTabNavigator({
  DecksList : { screen : DecksScreen },
  NewDeck   : { screen : NewDeckScreen },
  // Dirty way to set the navigationOptions:  
  // DecksList : { screen : DecksScreen, navigationOptions : () => ({tabBarLabel: 'Decks'}) },
});

export default Navigator;
