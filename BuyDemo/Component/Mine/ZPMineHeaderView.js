/**
 * Created by zhaopengsong on 2016/12/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var HeaderView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                {this.renderBottomView()}
            </View>
        );
    },

    /**--上部分--**/
    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri: 'Header'}} style={styles.leftIconStyle}/>
                <View style={styles.centerViewStyle}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>ZPengs</Text>
                    <Image source={{uri: 'avatar_vip'}} style={{width:17, height:17}}/>
                </View>
                {/*--右边的箭头--*/}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8}}/>
            </View>
        )
    },

    /**--下部分--**/
    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    },

    renderBottomItem(){
        // 数组
        var itemArr = [];
        // 数据数组
        var data = [{'number':'100', 'title':'优惠券'},{'number':'12', 'title':'评价'},{'number':'50', 'title':'收藏'}];
        // 遍历创建组件装入数组
        for(var i=0; i<data.length; i++){
            // 取出单独的数据
            var item = data[i];

            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                        <Text style={{color:'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        // 返回数组
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container: {
        height:400,
        backgroundColor:'rgba(255,96,0,1.0)'
    },

    centerViewStyle:{
        flexDirection:'row',
        width:width * 0.72
    },

    topViewStyle:{
        flexDirection:'row',
        marginTop:280,
        // 设置侧轴的对齐方式
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },

    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)'
    },

    bottomViewStyle:{
        flexDirection:'row',
        // 绝对定位
        position:'absolute',
        bottom:0
    },

    bottomInnerViewStyle:{
        width:(width/3)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderRightWidth:1,
        borderRightColor:'white'
    }
});

// 输出组件类
module.exports = HeaderView;
