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
  StatusBar,
  ListView,
  TextInput
} from 'react-native';
import HeaderInfo from '../components/headerInfo';
import BottomInfo from '../components/bottomInfo';

var blogData = [
  {
    "text_id":0,
    "text": "这是一条新鲜的微博",
    "reposts_count": 1,
    "comments_count": 88,
    "attitudes_count": 9,
    "user": {
        "id":1,
        "name": "zhoujunlin",
        "profile_image_url": "http://ibb.co/jgmoWS"
    }
  },
  {
    "text_id":2,
    "text": "这是第二条新鲜的微博",
    "reposts_count": 99,
    "comments_count": 20,
    "attitudes_count": 3,
    "user": {
        "id":2,
        "name": "user1",
        "profile_image_url": "http://ibb.co/jgmoWS"
    }
  }
];
var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

export default class HomeScreen extends React.Component {
  // 构造
  constructor(props) {
      super(props);
      console.log(this);

      // 初始状态
      this.state = {
          dataSource:ds.cloneWithRows(blogData),
          isRefreshing:true
      };
  }

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
      <View style={{ flex: 1}}>
          <View style={{backgroundColor:'#EAEAEA',justifyContent:'center',marginBottom:10}}>
              <TextInput style={{height:40,backgroundColor:'white',marginLeft:10,marginRight:10,borderRadius:3}} 
              placeholder={'  🔍 大家都在搜: react native '}/>
          </View>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              enableEmptySections={true}  //去除警告
          />
      </View>

    );
  }

  renderRow =(rowData,sectionID,rowID,highlightRow) =>{
      return(
          <View>
              {/*头像等信息*/}
                  <HeaderInfo rowData = {rowData} access_token = {this.props.access_token} mynavigator = {this.props.mynavigator}/>
              {/*中间微博信息*/}
              <View>
                  <Text>{rowData.text}</Text>
              </View>
              {/*转发.评论.点赞*/}
              <BottomInfo rowData = {rowData} goComment = {() => this.goComment()}/>
              {/*分隔条*/}
              <View style={{height:15,backgroundColor:'#CCCCCC'}}/>

          </View>
      );  
  }

  goComment = () =>{
      this.props.navigation.navigate("CommentList");
  }
}

