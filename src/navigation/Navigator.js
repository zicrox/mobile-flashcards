import { TabNavigator, StackNavigator } from 'react-navigation';
import {
  DecksListScreen,
  NewDeckScreen,
  DeckDetailScreen,
} from './screens';

const DecksScreen = StackNavigator({
  DecksList : { screen: DecksListScreen },
  DeckDetail : { screen: DeckDetailScreen },
});

const navigator = TabNavigator({
  DecksList : { screen: DecksListScreen },
  NewDeck   : { screen: NewDeckScreen },
});

export default navigator;
