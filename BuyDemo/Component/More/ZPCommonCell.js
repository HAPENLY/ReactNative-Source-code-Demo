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
    Switch,
} from 'react-native';
var commonCell = React.createClass({
    //设置常量
    getDefaultProps(){
        return{
            title:'',//标题
            isSwitch:false,//是否展示开关
            rightTitle:''
        }
    },
    // 设置变量
    getInitialState(){
        return{
            isOn:false

        }

    },
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('点击了')}}>
            <View style={styles.container}>
               {/*左边*/}
               <Text style={{marginLeft:8}}>{this.props.title}</Text>
                {/*右边指示箭头*/}
                {this.renderRightView()}

            </View>
            </TouchableOpacity>
        );
    },
    renderRightView(){
            if(this.props.isSwitch){//true
                return(
                    <Switch value={this.state.isOn ==true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} style={{marginRight:8}}/>
                )

            }else{
                return(
                    <View style={{flexDirection:'row'}}>
                        {this.rightTitle()}
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
                    </View>
                )
            }
    },
    rightTitle(){
        if (this.props.rightTitle.length>0) {
            return (
                <Text style={{color: 'gray',marginRight:3,alignItems:'center'}}>{this.props.rightTitle}</Text>
            )
        }
    },

});
const styles = StyleSheet.create({
    container: {
        height:44,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        //主轴方向
        flexDirection:'row',
        // 主轴对齐方式
        justifyContent:'space-between',
        // 水平居中
        alignItems:'center'

    },


});
module.exports = commonCell;