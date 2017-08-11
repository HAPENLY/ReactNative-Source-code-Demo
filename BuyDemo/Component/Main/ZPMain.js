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
    Platform,//用来判断当前的系统类型(iOS Android)
    Navigator,

} from 'react-native';
//导入外部组件
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/ZPHome');
var Shop = require('../Shop/ZPShop');
var Mine = require('../Mine/ZPMine');
var More = require('../More/ZPMore');

var Main = React.createClass({

    // 初始化状态机可变函数
    getInitialState(){
        return{
            selectedTab:'home'//默认是第一个
        }

    },
    render() {
        return (
            <TabNavigator>
                {/*//首页*/}
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home,true)}
                {/*商家*/}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/*我的*/}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
                {/*更多*/}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
            </TabNavigator>
        );
    },
    // 设置每个tabBarItem样式
    renderTabBarItem(titleName,iconName,selectedIconName,selectedTab,componentName,component,isBadge){
        return(
            <TabNavigator.Item
                title={titleName}
                renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.iconStyle}/>}
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab ===selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderBadge={()=>isBadge?<View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View>:null}
            >
                <Navigator
                    initialRoute={{ name: componentName, component: component }}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                />

            </TabNavigator.Item>
        )
    },

});

const styles = StyleSheet.create({
    iconStyle:{
      width:Platform.OS ==='ios' ? 30 :25,
        height:Platform.OS ==='ios' ? 30 :25,
    },
    selectedTitleStyle:{
        color:'orange'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    badgeView:{
        width:22,
        height:14 ,
        backgroundColor:'#f85959',
        borderWidth:1,
        marginLeft:10,
        marginTop:3,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    badgeText:{
        color:'#fff',
        fontSize:8,
    }

});
module.exports = Main;
