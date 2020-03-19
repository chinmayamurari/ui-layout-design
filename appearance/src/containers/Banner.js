import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const banner = ['banner1', 'banner2', 'banner3', 'banner4', 'banner5'];

export default class Banner extends React.Component {
  render() {
    return (
      <View style={{marginTop: 10}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 3,
            paddingRight: 20,
          }}>
          <Text style={{fontSize: 20}}>Banner</Text>
          <Text style={{fontSize: 20}}>?</Text>
        </View>
        <FlatList
          horizontal
          data={banner}
          renderItem={({item}) => {
            return (
              <View
                style={{paddingRight: 5, paddingBottom: 25, paddingTop: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    alert('you presseda a banner');
                  }}
                  style={{
                    alignItems: 'center',
                    backgroundColor: '#666',
                    justifyContent: 'space-around',
                    height: 80,
                    width: 250,
                    borderRadius: 5,
                    borderWidth: 3,
                  }}>
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
