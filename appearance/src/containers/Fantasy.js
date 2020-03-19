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
export default class Fantasy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        'banner1',
        'banner2',
        'banner3',
        'banner4',
        'banner5',
        'banner6',
        'banner7',
      ],
    };
  }
  render() {
    return (
      <View style={{backgroundColor: 'yellow', paddingTop: 10}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 20,
          }}>
          <Text style={{fontSize: 20}}>Fantasy</Text>
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
                    alignItems: 'baseline',
                    backgroundColor: '#666',
                    height: 140,
                    width: 120,
                    borderWidth: 3,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={{width: 115, height: 80}}
                  />

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
