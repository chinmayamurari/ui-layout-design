import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Home from './src/containers/home';
import details from './src/components/details';
import details from './src/containers/details';
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';

const rootStack = createStackNavigator(
  {
    home: {screen: Home},
    details: {screen: details},
  },
  {initialRouteName: 'home'},
);

const AppContainer = createAppContainer(rootStack);

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>hello mike</Text>
        <AppContainer />
      </View>
    );
  }
}
