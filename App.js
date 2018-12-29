import React from 'react';
import Navigator from './src/navigation/Navigator';
import initState from './src/initState';

export default class App extends React.Component {  
  state = initState;
  
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
  
  render() {
    return (
      <Navigator
        // screenProps are common to all screens nested in this "Navigator"
        screenProps={{
          state   : this.state,
          addDeck : this.addDeck,
        }}
      />
    );
  }
}
