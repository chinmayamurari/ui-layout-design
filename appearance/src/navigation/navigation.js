import React from 'react';
import {View,Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Banner from '../containers/Banner';
import RecentlyPlayed from '../containers/RecentlyPlayed';
import FeaturedEvent from '../containers/FeaturedEvents';
import Fantasy from '../containers/Fantasy';
import ChallengeToWin from '../containers/ChallengeToWin';
import AllGames from '../containers/AllGames';
import Home from '../containers/home'
import { StackNavigator } from 'react-navigation';
import App from '../../App';

const AppNavigator = StackNavigator(
{
  Banner: { screen: Banner },
  RecentlyPlayed : { screen: RecentlyPlayed  },
  FeaturedEvent: { screen: FeaturedEvent },
  Fantasy: { screen: Fantasy },
  ChallengeToWin: { screen: ChallengeToWin },
  AllGames: { screen: AllGames },
  Home:{screen:Home},
  App:{screnn:App}
},
  {
    initialRouteName:Home,
}
);
export default AppNavigator;



