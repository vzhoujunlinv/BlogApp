/**
 * Created by ZhouJunlin on 2018/1/27.
 * 我 页面
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

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        source={focused ? require('../images/mine.png') : require('../images/mine.png')}
        style={{ width: 26, height: 26, tintColor: tintColor }}
      />
    )
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>个人界面</Text>
      </View>
    );
  }
}