/**
 * Created by zhaopengsong on 2016/12/19.
 */
/**
 *               ii.                                         ;9ABH,
 *              SA391,                                    .r9GG35&G
 *              &#ii13Gh;                               i3X31i;:,rB1
 *              iMs,:,i5895,                         .5G91:,:;:s1:8A
 *               33::::,,;5G5,                     ,58Si,,:::,sHX;iH1
 *                Sr.,:;rs13BBX35hh11511h5Shhh5S3GAXS:.,,::,,1AG3i,GG
 *                .G51S511sr;;iiiishS8G89Shsrrsh59S;.,,,,,..5A85Si,h8
 *               :SB9s:,............................,,,.,,,SASh53h,1G.
 *            .r18S;..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,....,,.1H315199,rX,
 *          ;S89s,..,,,,,,,,,,,,,,,,,,,,,,,....,,.......,,,;r1ShS8,;Xi
 *        i55s:.........,,,,,,,,,,,,,,,,.,,,......,.....,,....r9&5.:X1
 *       59;.....,.     .,,,,,,,,,,,...        .............,..:1;.:&s
 *      s8,..;53S5S3s.   .,,,,,,,.,..      i15S5h1:.........,,,..,,:99
 *      93.:39s:rSGB@A;  ..,,,,.....    .SG3hhh9G&BGi..,,,,,,,,,,,,.,83
 *      G5.G8  9#@@@@@X. .,,,,,,.....  iA9,.S&B###@@Mr...,,,,,,,,..,.;Xh
 *      Gs.X8 S@@@@@@@B:..,,,,,,,,,,. rA1 ,A@@@@@@@@@H:........,,,,,,.iX:
 *     ;9. ,8A#@@@@@@#5,.,,,,,,,,,... 9A. 8@@@@@@@@@@M;    ....,,,,,,,,S8
 *     X3    iS8XAHH8s.,,,,,,,,,,...,..58hH@@@@@@@@@Hs       ...,,,,,,,:Gs
 *    r8,        ,,,...,,,,,,,,,,.....  ,h8XABMMHX3r.          .,,,,,,,.rX:
 *   :9, .    .:,..,:;;;::,.,,,,,..          .,,.               ..,,,,,,.59
 *  .Si      ,:.i8HBMMMMMB&5,....                    .            .,,,,,.sMr
 *  SS       :: h@@@@@@@@@@#; .                     ...  .         ..,,,,iM5
 *  91  .    ;:.,1&@@@@@@MXs.                            .          .,,:,:&S
 *  hS ....  .:;,,,i3MMS1;..,..... .  .     ...                     ..,:,.99
 *  ,8; ..... .,:,..,8Ms:;,,,...                                     .,::.83
 *   s&: ....  .sS553B@@HX3s;,.    .,;13h.                            .:::&1
 *    SXr  .  ...;s3G99XA&X88Shss11155hi.                             ,;:h&,
 *     iH8:  . ..   ,;iiii;,::,,,,,.                                 .;irHA
 *      ,8X5;   .     .......                                       ,;iihS8Gi
 *         1831,                                                 .,;irrrrrs&@
 *           ;5A8r.                                            .:;iiiiirrss1H
 *             :X@H3s.......                                .,:;iii;iiiiirsrh
 *              r#h:;,...,,.. .,,:;;;;;:::,...              .:;;;;;;iiiirrss1
 *             ,M8 ..,....,.....,,::::::,,...         .     .,;;;iiiiiirss11h
 *             8B;.,,,,,,,.,.....          .           ..   .:;;;;iirrsss111h
 *            i@5,:::,,,,,,,,.... .                   . .:::;;;;;irrrss111111
 *            9Bi,:,,,,......                        ..r91;;;;;iirrsss1ss1111
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView,

} from 'react-native';
//导入外部组件
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var HomeDetail = require('./ZPHomeDetail');
var  TopView = require('./ZPTopView');
var HomeMiddleView = require('./ZPHomeMiddleView');
var HomeMiddleBottomView = require('./ZPHomeMiddleBottomView');
var HomeShopCenter = require('./ZPshopCenter');
var HomeShopCenterDetail = require('./ZPshopCenterDetail');
var GeustYouLike  = require('./ZPGeustYouLike');
var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*//自定义导航栏*/}
                {this.renderNavBar()}
               {/*首页的主要内容*/}
               <ScrollView>
                   {/*添加头部组件*/}
                   <TopView/>
                   {/*添加中部视图*/}
                <HomeMiddleView />
                   {/*添加中间下半部分视图*/}
                <HomeMiddleBottomView
                    popTopHome={(data)=>{this.pushToView(data)}}
                />
                   {/*添加购物中心*/}
                    <HomeShopCenter
                        popToHomeView = {(url) => this.pushToShopCenterDetail(url)}
                    />
                   {/*猜你喜欢*/}
                   <GeustYouLike/>
               </ScrollView>
            </View>
        );
    },
    // 自定义导航栏
    renderNavBar(){
            return(

                <View style={styles.NavBarViewStyle}>
                    {/*位置*/}
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushToView()}}>
                    <Text style={{color:'white',fontSize:16,padding:10}}>北京</Text>
                    </TouchableOpacity>
                    {/*搜索栏*/}
                    <TextInput
                    placeholder="输入商家,品类,商圈"
                    style={styles.TextInputStyle}
                    />
                    <View style={styles.rightImageViewStyle}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('提醒')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImageStyle}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('扫描')}}>
                        <Image source={{uri:'icon_homepage_scan'}}  style={styles.navRightImageStyle}/>
                        </TouchableOpacity>

                    </View>

                </View>
            )
    },
    // 跳转到购物中心详情页
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component: HomeShopCenterDetail, // 要跳转的版块
                passProps: {'url':this.dealWithUrl(url)}
            }
        );
    },
    // 处理URL
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    },
    pushToView(){
        this.props.navigator.push({
            component:HomeDetail,
            title:"测试"
        })
    },
});
const styles = StyleSheet.create({
    //设置导航栏样式
    NavBarViewStyle:{
        height:Platform.OS ==='ios'? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        // 设置主轴方向
        flexDirection:'row',
        // 设置侧轴对齐方式
        alignItems:'center',
        // 设置主轴对齐方式
        justifyContent:'space-around'
    },
    // 首页View样式
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    TextInputStyle:{
        width:width*0.7,
        height:Platform.OS ==='ios'? 30 : 30,
        backgroundColor:'white',
        marginTop:Platform.OS ==='ios'? 20 :0 ,
        //渲染圆角
        borderRadius:10,
        //设置字体大小
        fontSize:14,
        // 设置内左边距
        paddingLeft:10,

    },
    rightImageViewStyle:{
        flexDirection:'row',
        // 设置侧轴对齐方式
        alignItems:'center',
        height:64,
    },
    navRightImageStyle:{
        width:25,
        height:25,
    },
    ViewStyle:{

    }
});
module.exports = Home;