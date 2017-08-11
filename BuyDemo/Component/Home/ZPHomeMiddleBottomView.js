/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

// 导入外部的json数据
var Home_D4 = require('../../LocalData/XMG_Home_D4.json');

// 引入外部的组件类
var CommonView = require('./ZPHomeMiddleCommonView');
// 引入外部的组件类
var HomeDetail = require('./ZPHomeDetail');
var BottomView = React.createClass({
    getDefaultProps(){
        return{
            // 回调函数
            popTopHome:null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>

                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },

    // 下部分的所有子组件
    renderBottomItem(){
        // 组件数组
        var itemArr = [];
        // 拿到对应的数据
        var dataArr = Home_D4.data;
        // 遍历
        for(var i=0; i<dataArr.length; i++){
            // 取出单独的数据
            var itemData = dataArr[i];
            // 创建组件,装入数组
            itemArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    key={i}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
        }

        // 返回组件数组
        return itemArr;
    },

    // 继续往父级界面传递数据
    popToTopView(data){
        // 继续执行回调函数
        this.props.popTopHome(data);
    },

    // 处理图像的尺寸
    dealWithImgUrl(url){
        if (url.search('w.h') == -1){ // 没有找到,正常返回
            return url;
        }else{
            return url.replace('w.h', '120.90');
        }
    }
});


const styles = StyleSheet.create({
    container: {
        marginTop:15,
        height:60

    },

    topViewStyle:{

    },

    bottomViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        flexWrap:'wrap'
    }
});

// 输出组件类
module.exports = BottomView;
