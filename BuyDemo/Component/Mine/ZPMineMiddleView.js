/**
 * Created by zhaopengsong on 2016/12/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
var MineMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderInnerView('order1','代付款')}
                {this.renderInnerView('order2','待使用')}
                {this.renderInnerView('order3','待评价')}
                {this.renderInnerView('order4','退款/售后')}
            </View>
        );
    },
    renderInnerView(imageName, title){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('点击了')}}>
                <View style={styles.subViewStyle}>
                    <Image source={{uri:imageName}} style={styles.ImageStyle}/>
                    <Text>{title}</Text>
                </View>
            </TouchableOpacity>
            )
    },


});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // 改变主轴方向
        flexDirection:'row',
        //改变水平对齐方式
        justifyContent:'space-around'
    },
    ImageStyle:{
        width:30,
        height:30,
        marginBottom:5,
    },
    subViewStyle:{
       backgroundColor:'white',
        // 设置垂直居中
        alignItems:'center'
    },


});
module.exports = MineMiddleView;