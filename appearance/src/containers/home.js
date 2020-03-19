import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
        <Text>home screen</Text>
        <Button
          title="details screen"
          onPress={() => this.props.navigation.navigate('details')}
        />
      </View>
    );
  }
}
