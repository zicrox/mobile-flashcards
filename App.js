import React from 'react';
import Navigator from './src/navigation/Navigator';
import initState from './src/initState';

export default class App extends React.Component {  
  state = initState;
  
  // In some cases can be usefull to use "setState callback"
  // https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
  
  addDeck = (data) => {
    if(this.state[data.title]){
      // The deck arleady exist
      return false;
    }
    // Add new deck
    data.questions = [];
    this.setState({[data.title]: data});
    return true;
  }
  
  // Add new card (cards do not need to be unique)
  // Cards stored in nested (one level) array of cards.
  // We use the Immutable Update Patterns (redux style): 
  // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
  addCard = (data) => {
    this.setState((prevState) => {
      const questionToAdd = {
        question: data.question,
        answer: data.answer
      }
      let questions = prevState[data.deckTitle].questions.slice(); // Prev questions array clone
      questions.push(questionToAdd);
      return {
        [data.deckTitle]:{...prevState[data.deckTitle], questions: questions}
      }
    })
    return true;
  }
  
  render() {
    return (
      <Navigator
        // screenProps are common to all screens nested in this "Navigator"
        screenProps={{
          state   : this.state,
          addDeck : this.addDeck,
          addCard : this.addCard,
        }}
      />
    );
  }
}
