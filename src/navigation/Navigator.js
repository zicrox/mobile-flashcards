
// DOCS: Navigation options resolution (How this works when there are multiple navigators)
// https://reactnavigation.org/docs/en/2.x/navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens

import { 
  createBottomTabNavigator, 
  createStackNavigator 
} from 'react-navigation';
import {
  DecksListScreen,
  NewDeckScreen,
  DeckDetailScreen,
} from './screens';

const DecksScreen = createStackNavigator({
  DecksList  : { screen: DecksListScreen },
  DeckDetail : { screen: DeckDetailScreen },
});
DecksScreen.navigationOptions = {
  tabBarLabel: 'Decks',
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
