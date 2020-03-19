import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

export default class FeaturedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: ['banner1', 'banner2', 'banner3', 'banner4'],
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 10,
            paddingRight: 20,
          }}>
          <Text style={{fontSize: 20}}>5 featured events</Text>
          <TouchableOpacity style={{fontSize: 20}}>
            <Text>View All ></Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={this.state.banner}
          renderItem={({item}) => {
            return (
              <View
                style={{paddingRight: 5, paddingBottom: 25, paddingTop: 10}}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#666',
                    justifyContent: 'space-around',
                    height: 150,
                    width: 120,
                    borderRadius: 10,
                    borderWidth: 3,
                  }}>
                  <Image
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={{width: 115, height: 80}}
                  />
                  <Text>{item}</Text>
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
