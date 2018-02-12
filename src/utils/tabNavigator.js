import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  StatusBar,
  StackNavigator
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../pages/home';
import ProfileScreen from '../pages/profile';
// import Setting from '../pages/setting'

const RootTabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      
    },
    // Setting:{
    //   screen: Setting,
    // },
    ProfileScreen: {
      screen: ProfileScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#4BC1D2',
      inactiveTintColor: '#000',
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#823453',
      pressOpacity: 0.8,
      labelStyle: {
        fontSize: 12,
        margin: 1
      },
      indicatorStyle: { height: 0 }, 
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    backBehavior: 'none',
}
);

export default RootTabs;