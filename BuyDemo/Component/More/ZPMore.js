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
    Platform,
    ScrollView,
} from 'react-native';
// 引入外部组件
var  CommonCell = require('./ZPCommonCell');
var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*设置导航栏*/}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title='扫一扫'
                        />
                    </View>
                    <View style={{marginTop:20}}>
                        <CommonCell
                            title='省流量模式'
                            isSwitch={true}
                        />
                        <CommonCell
                            title='省流量模式'
                            isSwitch={false}
                        />
                        <CommonCell
                            title='省流量模式'
                            isSwitch={false}
                        />
                        <CommonCell
                            title='省流量模式'
                            isSwitch={false}
                        />
                        <CommonCell
                            title='清空缓存'
                            isSwitch={false}
                            rightTitle = "1.99M"
                        />
                    </View>
                    <View style={{marginTop:20}}>

                        <CommonCell
                            title='扫一扫'
                        />
                        <CommonCell
                            title='扫一扫'
                        />
                        <CommonCell
                            title='扫一扫'
                        />
                        <CommonCell
                            title='扫一扫'
                        />
                    </View>
                </ScrollView>

            </View>
        );
    },
    //返回导航栏
    renderNavBar(){
        return (
            <View style={styles.NavBarViewStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('点击了')}} style={styles.rightViewStyle}>
                <Image source={{uri:'icon_mine_setting'}} style={styles.navRightImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    NavBarViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },
    navRightImageStyle:{
        width:25,
        height:25,
    },
    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },
});
module.exports = More;