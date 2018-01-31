/**
 * Created by ZhouJunlin on 2018/1/27.
 * 博客首页
 */
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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '博客',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? require('../images/ic_hot_home.png') : require('../images/ic_find_hot.png')}
        style={{ width: 26, height: 26, tintColor: tintColor }}
      />
    )
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>博客文章</Text>
      </View>
    );
  }
}

