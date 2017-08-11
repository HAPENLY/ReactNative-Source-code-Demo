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
    ScrollView,
    Image,

} from 'react-native';
//引入Dimensions
var Dimensions = require('Dimensions');
var {width}= Dimensions.get('window');
//引入计时器类库
var  TimerMixin = require('react-timer-mixin');
//引入Json数据
// var ImageData = require('./ImageData.json');
//ES5中实现
var ZPScrollView = React.createClass({
  //设置定时器
  mixins:[TimerMixin],
  //设置可变的和初始值
  getInitialState(){
    return{
      //当前的页码
      currentPage:0,
        //设置标题
        title:this.props.ImageDataArr[0].title,
  }
  },
  //设置固定值
  getDefaultProps(){
        return{
           //每个多少时间
            time :1000,
            // 所有的Image对象数组
            ImageDataArr:[],
        }
  },
render(){
  return(
      <View style={styles.container}>
        {/*添加ScrollView*/}
        <ScrollView
            //绑定一下scrollView 方便下文获取
            ref="scrollView"
            //设置是否水平排
            horizontal={true}
            //是否自动翻页
            pagingEnabled={true}
            //隐藏滚动条
            showsHorizontalScrollIndicator={false}
            //当一帧滚动结束的时候调用(重写系统的onAnimationEnd函数)
            onMomentumScrollEnd = {(e) =>this.onAnimationEnd(e)}
            //开始拖拽的时候调用
            onScrollBeginDrag = {()=>this.onScrollBeginDrag()}
            //停止拖拽的时候调用
            onScrollEndDrag ={this.onScrollEndDrag}

        >
          {this.renderAllImage()}
        </ScrollView>
        {/*返回五个焦点指示器*/}
        <View style={styles.PageViewStyle}>
            {/*返回对应的标题*/}
            <Text style={{color:'white'}}>{this.state.title}</Text>

            <View style={{flexDirection:'row'}}>
                {/*返回五个圆点*/}
                {this.renderPagerCircle()}
            </View>
        </View>
      </View>
  )
},
  //调用开始拖拽
  onScrollBeginDrag(){
  this.clearInterval(this.timer);

  },
//停止拖拽的时候调用
  onScrollEndDrag(){
this.startTime();

  },

  //实现一些复杂操作
  componentDidMount(){
    //开始定时器
    this.startTime();
  },
//开启定时器
  startTime(){
          //1.拿到scrollView
          var scrollView = this.refs.scrollView;
          var  imgcount = this.props.ImageDataArr.length;
          //2.添加定时器
           this.timer = this.setInterval(function(){
              //console.log('1');
              //2.1设置圆点
              //定义临时变量,记入当前页码
              var activePage;
                //2.2判断
              if((this.state.currentPage+1)>=imgcount){
                //越界
                activePage = 0;
              }else {
                activePage = this.state.currentPage+1;
              }
                //2.3 更新状态机
              this.setState({
                currentPage:activePage
              });

              //2.4让scrollView滚动起来
              var  offSerx = activePage * width;
              scrollView.scrollResponderScrollTo({x:offSerx,y:0,animated:true});
            },this.props.time)


  },
  //返回所有的图片
  renderAllImage(){
    //定义图片数组
    var allImage = [];
    //拿到图像上数组
    var imagesArr= this.props.ImageDataArr;
    for(var i=0;i<imagesArr.length;i++){
      //去除单独的对象
      var imgItem = imagesArr[i];
        // console.log(imgItem);
        // debugger;
      //创建组件装入数组
      allImage.push(
          <Image key={i} source={{uri:imgItem.imgsrc}} style={{width:width,height:120}}/>
      );
    }
    return allImage;
  },
//返回所有圆点
  renderPagerCircle(){
    //定义数字放置所有圆点
    var indicatorArr = [];
//自定义一个样式用来判断是否是当前页
    var style ;
    //拿到图像上数组
    var imagesArr= this.props.ImageDataArr;
      console.log(imagesArr);
    //遍历所有的数据
    for(var i=0;i<imagesArr.length;i++){
      style = (i===this.state.currentPage)? {color:'orange'} :{color:'#ffffff'};
      //把圆点装入数组(&bull: 特殊转义字符就是一个点)
      //如果想放置两个样式的话格式是:style={[style,style]}
      indicatorArr.push(
          <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
      )
    }
  return indicatorArr;
  },
  //实现当一帧滚动结束的时候调用
  onAnimationEnd(e){
    //1.首先求出水平方向的偏移量
    var offSetX = e.nativeEvent.contentOffset.x;
    //2.求出当前的页数Math.floor:用于取正数值
    var currentPage  =Math.floor(offSetX / width);
    console.log(currentPage);
    //3.更新状态机,重新绘制UI
    this.setState({
      //当前的页码
      currentPage:currentPage,
        title:this.props.ImageDataArr[currentPage].title,
    })
  },
});

const styles = StyleSheet.create({
  container: {
// marginTop:25,
  },
  PageViewStyle:{
    width:width,
    height:25,
    backgroundColor:'rgba(0,0,0,0.4)',
    //绝对定位
    position:'absolute',
    bottom:0,
    //设置株主轴的方向
    flexDirection:'row',
    //设置侧轴方向的对齐方式
    alignItems:'center',
    //设置主轴的对齐方式(将标题和圆点两端对齐)
      justifyContent:'space-between'



  }

});
//输出
module.exports = ZPScrollView;