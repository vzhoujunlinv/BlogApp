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
import { TabNavigator } from 'react-navigation';
import HomeScreen from './pages/home';
import ProfileScreen from './pages/profile';




// class ProfileScreen extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: '我',
//     tabBarIcon: ({ focused, tintColor }) => (
//       <Image
//         source={focused ? require('./images/ic_hot_home.png') : require('./images/ic_find_hot.png')}
//         style={{ width: 26, height: 26, tintColor: tintColor }}
//       />
//     )
//   };
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>个人界面</Text>
//       </View>
//     );
//   }
// }

const RootTabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      
    },
    // Add:{
    //   screen: a,
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
      style: {
        backgroundColor: '#fff',
        paddingBottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
      },
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