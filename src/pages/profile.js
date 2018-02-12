/**
 * Created by ZhouJunlin on 2018/1/27.
 * 我 页面
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Image,
    Dimensions,
    TouchableOpacity,
    Navigator,
    ScrollView
} from 'react-native';

var {width,height} = Dimensions.get('window');

import Navigator1 from '../utils/navigator1';
import MineItem from '../components/listItem';
import Info from '../components/infoItem';
import Setting from './setting'

export default class ProfileScreen extends React.Component {

  // 构造
    constructor(props) {
        super(props);
        // this.rightAction = this.rightAction.bind(this);
        // 初始状态
        // mynavigator = {this.props.navigator}
        this.state = {
            access_token:null,
            statuses_count:0, //微博数
            friends_count:0,  //关注数
            followers_count:0, //粉丝
            name:'aaaaaaaaaaaaa',  //用户名
            avatar_large:'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png', //头像
            description:''  //个人描述
        };
    }

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
      <View style={{ flex: 1}} >
        <Navigator1 leftText = '添加好友' centerText = '我'  rightText = '        设置' 
        leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
        <ScrollView>
        {/*个人信息*/}
            <View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Image source={{uri:this.state.avatar_large}} style={{width:60,height:60,borderRadius:30}} />
                  <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{this.state.name}</Text>
                    <Text style={{color:'#CCCCCC',fontSize:11}}>{this.state.description}</Text>
                  </View>
                </View>
                <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Info txt1 = {this.state.statuses_count} txt2 = '微博' />
                    <Info txt1 = {this.state.friends_count} txt2 = '关注' />
                    <Info txt1 = {this.state.followers_count} txt2 = '粉丝' />
                  </View>
                  <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
            </View>
            <MineItem txt1 = " 我的评论" source = {require('../images/评论.png')}/>
            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
            <MineItem txt1 = " 我的赞"   source = {require('../images/点赞.png')}/>
            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
            <MineItem txt1 = " 我的收藏"   source = {require('../images/收藏.png')}/>
            <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
        </ScrollView>
      </View>

    );
  }

  leftAction = () =>{
      alert('添加好友');
  }

  rightAction = () =>{
    console.log(this);
    this.props.navigation.navigate("Setting");
  }
}