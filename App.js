import React from 'react';
import Navigator from './src/navigation/Navigator';

export default class App extends React.Component {
  
  // Test concept: Navigator Props
  // https://reactnavigation.org/docs/navigators/tab#Navigator-Props
  getDecks = () => {
    console.log('call getDecks');
  }
  
  render() {
    return (
      <Navigator 
        screenProps={this.getDecks}
      />
    );
  }
}

// It is seems that expo do not allow "functional component" for the "registerRootComponent"
// https://docs.expo.io/versions/latest/sdk/register-root-component.html

// export default () => (
//   <View style={styles.container}>
//     <Navigator />
//   </View>
// );