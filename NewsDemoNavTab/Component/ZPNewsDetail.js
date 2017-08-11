/**
 * Created by zhaopengsong on 2016/12/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
} from 'react-native';
// http://c.3g.163.com/nc/article/C8ABBG400008856R/full.html
var ZPNewsDetail = React.createClass({
  getInitialState(){
      return{
          //设置初始值(具体展示的值)
          detailData:''
      }
  },
    render() {
        return (
            <WebView
                //自动设置样式
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{html:this.state.detailData, baseUrl:''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        );
    },
    componentDidMount(){
        //请求的路径
        var url = 'http://c.3g.163.com/nc/article/'+this.props.rowData.docid+'/full.html';
    console.log(url);
        //发送请求
        fetch(url)
            .then((response)=>response.json())
            .then((responseDate)=>{
                var allData= responseDate[this.props.rowData.docid];
                var body = allData['body'];
                if(allData['img'].length >0){
                    //遍历
                    for(var i=0;i<allData['img'].length; i++){
                        //取出单个图像对象
                        var img  = allData['img'][i];
                       // 取出图像连接
                        var imgSrc = img['src'];
                        //拼接图片Html
                        var  imgHtml = '<img src ="'+imgSrc+'" width="100%">';
                        // 替换掉body中的图像占位符
                        body = body.replace(img['ref'],imgHtml);
                    }
                }
                // 更新状态机
                this.setState({
                    detailData:body,
                });
            })
            .catch((error)=>{
                if (error){
                    alert('数据请求出错');
                }
            })
    },


});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

module.exports = ZPNewsDetail;