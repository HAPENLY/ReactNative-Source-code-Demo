/**
 * Created by zhaopengsong on 2016/12/13.
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
    TabBarIOS,
    NavigatorIOS,
    Platform
} from 'react-native';
//导入外部相应的组件
var Home = require('../Component/ZPHome');
var Find = require('../Component/ZPFind');
var Message = require('../Component/ZPMessage');
var Mine = require('../Component/ZPMine');
var ZPMain = React.createClass({
    //初始化方法
    getInitialState(){
      return{
          //设置选中标示
          selectedItem:'home'//默认首页被选中
      }
    },
    render() {
        return (
           <TabBarIOS
           tintColor='orange'
           >
               {/*首页*/}
               <TabBarIOS.Item
                   icon={require('image!tabbar_home')}
                   title="首页"
                   selected={this.state.selectedItem =='home'}
                   onPress={()=>{this.setState({selectedItem:'home'})}}
               >
                   {/*添加导航栏*/}
                   <NavigatorIOS
                       tintColor='orange'
                       //这里需要注意一定要设置flex为1 沾满这个页面。不然Nav里面的内容是看不见的
                       style={{flex:1}}
                       initialRoute ={
                       {
                        component:Home,//想要跳转的具体的版块名称
                        title:"ZPengs",
                        leftButtonIcon:require('image!navigationbar_friendattention'),
                         rightButtonIcon:require('image!navigationbar_pop')
                       }
                   }
                   />
               </TabBarIOS.Item>
               {/*消息*/}
               <TabBarIOS.Item
                   icon={require('image!tabbar_discover')}
                   title="发现"
                   selected={this.state.selectedItem =='find'}
                   onPress={()=>{this.setState({selectedItem:'find'})}}
               >
                   {/*添加导航栏*/}
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute ={
                       {
                           component:Find,//想要跳转的具体的版块名称
                           title:"发现"
                       }
                       }
                   />
               </TabBarIOS.Item>
               {/*发现*/}
               <TabBarIOS.Item
                   icon={require('image!tabbar_message_center')}
                   title="消息"
                    selected={this.state.selectedItem =='message'}
                   onPress={()=>{this.setState({selectedItem:'message'})}}

               >
                   {/*添加导航栏*/}
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute ={
                       {
                           component:Message,//想要跳转的具体的版块名称
                           title:"消息"
                       }
                       }
                   />
               </TabBarIOS.Item>
               {/*我的*/}
               <TabBarIOS.Item
                   icon={require('image!tabbar_profile')}
                   title="我的"
                   selected={this.state.selectedItem =='mine'}
                    onPress={()=>{this.setState({selectedItem:'mine'})}}
               >
                   {/*添加导航栏*/}
                   <NavigatorIOS
                       style={{flex:1}}
                       initialRoute ={
                       {
                           component:Mine,//想要跳转的具体的版块名称
                           title:"我的"
                       }
                       }
                   />
               </TabBarIOS.Item>
           </TabBarIOS>
        );
    },
});
const styles = StyleSheet.create({

});
module.exports = ZPMain;