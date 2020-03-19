import React from 'react';
import {View, Text, Button} from 'react-native';

export default class details extends React.Component {
  render() {
    return (
      <View>
        <Text>home screen</Text>
        <Button
          title="details screen"
          onPress={() => this.props.navigation.push('details')}
        />
      </View>
    );
  }
}
