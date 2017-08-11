/**
 * Created by zhaopengsong on 16/12/7.
 */
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
    View,
    Image,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height}= Dimensions.get('window');

export default class loginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('./img/icon.png')} style={styles.iconStytle}/>
                {/*账号和密码*/}
                <TextInput placeholder={'请输入用户名'} password ={true} style={styles.textInputStytle}/>
                <TextInput placeholder={'请输入密码'} password ={true} style={styles.textInputStytle}/>
                {/*登录*/}
                <View  style={styles.loginBtnStytle}>
                    <Text style={{color:'white'}}>登录</Text>
                </View>
                {/*设置*/}
                <View style={styles.settingStytle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                {/*其他登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式:</Text>
                    <Image source={require('./img/icon3.png')} style={styles.otherImageStyle}/>
                    <Image source={require('./img/icon7.png')}style={styles.otherImageStyle}/>
                    <Image source={require('./img/icon8.png')}style={styles.otherImageStyle}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#dddddd',
    },
    iconStytle:{

        width:80,
        height:80,
        borderRadius:40,
        borderWidth:5,
        borderColor:'white',
        marginTop:50,
        marginBottom:30,
    },
    textInputStytle:{
        height:38,
        backgroundColor:'white',
        marginBottom:1,
        //内容居中
        textAlign:'center'
    },
    loginBtnStytle:{
        height:35,
        width:width*0.8,
        backgroundColor:'blue',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    settingStytle:{
        //设置主轴方向
        flexDirection:'row',
        //主轴对齐方式
        justifyContent:'space-between',
        marginTop:15,
        width:width*0.8,
    },
    otherLoginStyle:{
        //设置主轴方向
    flexDirection:'row',
        //设置侧轴对齐
        alignItems:'center',
        //绝对定位
        position:'absolute',
        bottom:10,
        left:20,
    },
    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:8,
    }
});

module.exports = loginView;
