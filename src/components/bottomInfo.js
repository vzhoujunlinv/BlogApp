/**
 * Created by ZhouJunlin on 2018/2/1.
 */
import React, { Component } from 'react';
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

export default class BottomInfo extends React.Component {

    render() {
        const rowData = this.props.rowData
        return (
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/转发.png')} style={{width:20,height:20}} />
                    <Text>{rowData.reposts_count == 0 ? '转发' :rowData.reposts_count}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>this.props.goComment()} style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../images/评论.png')} style={{width:20,height:20}} />
                        <Text>{rowData.comments_count == 0 ? '转发' :rowData.comments_count}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/点赞.png')} style={{width:20,height:20}} />
                    <Text>{rowData.attitudes_count == 0 ? '转发' :rowData.attitudes_count}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    }
});
