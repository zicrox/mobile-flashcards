import { TabNavigator } from 'react-navigation';
import {
  DecksScreen,
  NewDeckScreen,
} from './screens';

const navigator = TabNavigator({
  Decks : { screen: DecksScreen },
  NewDeck : { screen: NewDeckScreen }
});

export default navigator;
