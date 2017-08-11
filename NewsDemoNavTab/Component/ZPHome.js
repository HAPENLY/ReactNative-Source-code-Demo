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
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
//导入外面的组件
var ZPScrollView = require('../Component/ZPScorllView');
var ZPNewsDetail = require('../Component/ZPNewsDetail');

var ZPHome = React.createClass({
    // //设置常量
    getDefaultProps(){
        return{
            url_api :"http://c.m.163.com/nc/auto/list/5YWo5Zu9/0-20.html",
            keyWord:'list'
        }

    },
    //初始化方法
    //初始化方法
    getInitialState(){
        return{
           //ListView头部的数据源
            headerDataArr:[],
            //cell的数据源
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>{r1 !== r2}})
        }
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
            />
        );
    },
    //创建headerView
    renderHeader(){
        //判断
        if(this.state.headerDataArr.length ==0)return;
        return(
           <ZPScrollView
               ImageDataArr = {this.state.headerDataArr}
           />
        );
    },
    //创建单独的cellView
    renderRow(rowData){
        return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushToNewsDetail(rowData)}}>
            <View style={styles.cellViewStyle}>
                {/*左边*/}
                <Image source={{uri:rowData.imgsrc}} style={styles.imgStyle}/>
                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                    <Text style={styles.subTitleStyle}>{rowData.digest}</Text>
                    <Text style={styles.followTitleStyle}>{rowData.replyCount}跟帖</Text>
                </View>
            </View>
        </TouchableOpacity>
        )
    },
//跳转到新闻详情页
    pushToNewsDetail(rowData){
// console.log('hahahah');
//         alert(rowData.title);
        this.props.navigator.push({
            component:ZPNewsDetail,
            title:rowData.title,
            passProps:{rowData}
        })
    },
    // 处理一些复杂的操作
    componentDidMount(){
        this.loadDataFromNet();
    },
    //网络请求
    loadDataFromNet() {
         fetch(this.props.url_api)
             .then((response)=>response.json())
             .then((responseData)=>{
                 console.log(responseData);
                 // 拿到所有的数据
                 var jsonData = responseData[this.props.keyWord];
                 console.log(jsonData);
                 //处理网络数据
                 this.dealWithData(jsonData);
             })
             .catch((error)=>{
                 if(error){
                     console.log(error);
                 }
             })
    },
    //处理网络数据
    dealWithData(jsonData){
        console.log(jsonData);
        // 定义临时变量
        var headerArr =[],listDataArr=[];
        //遍历拿到的json数据
     for(var i=0; i<jsonData.length ; i++){
         //取出单独的对象
         var data = jsonData[i];

         console.log(data);
         //判断
         if(data.hasAD ==1){
             headerArr = data.ads;
         }else {
             listDataArr.push(data);
         }
     }
        //更新状态机
        this.setState({
            //添加ListVeiw头部的数据源
            headerDataArr:headerArr,
            //cell的数据源
            dataSource:this.state.dataSource.cloneWithRows(listDataArr)
        })
        console.log(headerArr,listDataArr);
    },

});

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:16,
        marginBottom:5,
       
    },
    subTitleStyle:{
        fontSize:14,
        color:'gray',
    },
    followTitleStyle:{
            //绝对定位
        position:'absolute',
        right:10,
        bottom:0,
        //设置边框
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5,
        padding:0,
        color:'gray',
        height:17,
        justifyContent:'center'

    },
    cellViewStyle:{
        //设置间距
        padding:10,
        // 设置下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        flexDirection:'row',

    },
    rightViewStyle:{

        width:260,
        // 距离左边的间距
        marginLeft:5,
    },
    imgStyle:{
        width:90,
        height:90,

    },

});

module.exports = ZPHome;