import React from 'react';
import Navigator from './src/navigation/Navigator';
import initState from './src/initState';

export default class App extends React.Component {  
  state = initState;
  
  getDecks = () => {
    console.log('call getDecks');
  }
  
  render() {
    return (
      <Navigator 
        screenProps={{
          state: this.state,
          getDecks: this.getDecks
        }}
      />
    );
  }
}
