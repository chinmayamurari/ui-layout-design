import React from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class ChallengeToWin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        'person1',
        'person2',
        'person3',
        'person4',
        'person5',
        'person6',
        'person7',
      ],
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'grey', paddingTop: 10}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 20,
          }}>
          <Text style={{fontSize: 20}}>CHALLENGE TO WIN</Text>
          <TouchableOpacity style={{fontSize: 20}}>
            <Text>View All ></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={this.state.banner}
          renderItem={({item}) => {
            return (
              <View style={{padding: 10}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    padding: 30,
                    height: 50,
                    width: 50,
                    borderRadius: 35,
                  }}>
                  <ActivityIndicator size="large" color="yellow" />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
