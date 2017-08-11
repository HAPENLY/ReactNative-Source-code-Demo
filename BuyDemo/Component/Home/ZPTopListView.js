/**
 * Created by zhaopengsong on 2016/12/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';


var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 全局的变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70: 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);

var TopListView = React.createClass({
    getDefaultProps(){
        return{
            dataArr: []
        }
    },

    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },
    // 具体的cell
    renderRow(rowdata){
        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
                    <Text style={styles.titleStyle}>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});
const styles = StyleSheet.create({
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        alignItems:'flex-start',
        // 宽度
        width:width,

    },
    cellStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },

    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 13 : 12,
        color:'gray'
    }
});

// 输出组件类
module.exports = TopListView;
