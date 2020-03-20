import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import Banner from './src/container/Banner';
import RecentlyPlayed from './src/containers/RecentlyPlayed';
import FeaturedEvent from './src/containers/FeaturedEvents';
import Fantasy from './src/containers/Fantasy';
import ChallengeToWin from './src/containers/ChallengeToWin';
import AllGames from './src/containers/AllGames';



const bannerArray = [
  'banner',
  'RecentlyPlayed',
  'FeaturedEvent',
  'Fantasy',
  'ChallengeToWin',
  'AllGames',
];

export default class App extends React.Component {
  render() {
    return (
        <View>
          <View
            style={{
              height: 80,
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>HEADER</Text>
          </View>
         
          <FlatList
            style={{backgroundColor: 'blue'}}
            data={bannerArray}
            renderItem={({item}) => {
              switch (item) {
                case 'banner':
                  return <Banner />;
                case 'RecentlyPlayed':
                  return <RecentlyPlayed />;
                case 'FeaturedEvent':
                  return <FeaturedEvent />;
                case 'Fantasy':
                  return <Fantasy />;
                case 'ChallengeToWin':
                  return <ChallengeToWin />;
                case 'AllGames':
                  return <AllGames />;
              }
            }}
            keyExtractor={(item, index) => index}
          />
          {/* <ScrollView style={{backgroundColor: 'blue'}}>
          <Banner />
          <RecentlyPlayed />
          <FeaturedEvent />
          <Fantasy />
          <ChallengeToWin />
          <AllGames />
        </ScrollView> */}
          <View style={styles.fab}>
            <TouchableOpacity>
              <Text style={{color: '#fff', fontSize: 12}}>More Games ▼</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    alignSelf: 'center',
    height: 40,
    width: 100,
    borderRadius: 30,
    position: 'absolute',
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderWidth: 2,
  },
});
