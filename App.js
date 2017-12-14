import React from 'react';
import Navigator from './src/navigation/Navigator';

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
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