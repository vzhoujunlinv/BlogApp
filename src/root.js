import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RootTabs from './utils/tabNavigator';
import HomeScreen from './pages/home';
import ProfileScreen from './pages/profile';
import Setting from './pages/setting'
import CommentList from './pages/comment'


const Navigator = StackNavigator(
  {
    Tab: { screen: RootTabs },
    Setting: { screen: Setting },
    CommentList: { screen: CommentList }
  },
  {  
    navigationOptions:{  
      headerBackTitle:null,  
      headerTintColor:'#333333',  
      showIcon:true,  
      swipeEnabled:false,  
      animationEnabled:false,
      headerTitle:"Blog",
      headerTitleStyle: {
        backgroundColor: '#fff',
        paddingBottom: 0,
      },
    },  
  
    mode:'card',  
  }
);

export default Navigator;