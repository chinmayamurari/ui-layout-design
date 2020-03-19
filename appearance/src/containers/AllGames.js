import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class AllGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
      ],
    };
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'space-evenly',
          paddingTop: 10,
          paddingLeft: 10,
          paddingBottom: 55,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 3,
            paddingRight: 20,
          }}>
          <Text style={{fontSize: 20, color: '#fff'}}>ALL GAMES</Text>
          <Text style={{fontSize: 20}}>?</Text>
        </View>
        <FlatList
          data={this.state.games}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  justifyContent: 'space-around',
                  padding: 15,
                }}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#666',
                    justifyContent: 'space-around',
                    height: 100,
                    width: 100,
                    borderWidth: 3,
                    borderRadius: 10,
                  }}>
                  <ActivityIndicator size="large" color="#0000ff" />
                  <Text>{item}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
