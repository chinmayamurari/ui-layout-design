import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RecentlyPlayed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        'recent played image 1',
        'recent played image 2',
        'recent played image 3',
        'recent played image 4',
      ],
    };
  }
  render() {
    return (
      <View style={{backgroundColor: '#333', paddingTop: 10}}>
        <Text style={{fontSize: 20}}>RecentlyPlayed</Text>

        <FlatList
          contentContainerStyle={{paddingHorizontal: 20}}
          horizontal
          data={this.state.banner}
          renderItem={({item}) => {
            return (
              <View
                style={{paddingRight: 5, paddingBottom: 25, paddingTop: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    alert('you presseda recent played');
                  }}
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#666',
                    borderRadius: 10,
                    height: 140,
                    width: 120,
                    borderWidth: 3,
                  }}>
                  <View style={{marginBottom: 5, borderWidth: 2}}>
                    <Image
                      source={{
                        uri:
                          'https://www.searchpng.com/wp-content/uploads/2018/12/OG_MPL.png',
                      }}
                      style={{width: 100, height: 80}}
                    />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="home" size={24} color="#ffffff" />
                    <Text>game name</Text>
                  </View>
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
