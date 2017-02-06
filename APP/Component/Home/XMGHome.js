import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,  //判断系统
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var HomeDetail = require('./XMGHomeDetail');

var Home = React.createClass({
  render() {
    return (
      <View style={styles.container}>
          {/*首页导航条*/}
          {this.renderNavBar()}
          <TouchableOpacity onPress={ ()=> {this.pushToDetail()} }>     
              <Text style={styles.welcome}>
                home
              </Text>
          </TouchableOpacity>    
      </View>
    );
  },

  //首页导航条
  renderNavBar(){
    return (
         <View style={styles.navBarStyle}>
              <TouchableOpacity onPress={ ()=>{alert('clicked')}}>
                 <Text style={{color:'white'}}>
                      北京
                 </Text>
              </TouchableOpacity>
              <TextInput 
                 placeholder="输入商家，品类"
                 style={styles.topInputStyle}
              />
              <View style={styles.rightNavViewStyle}>
                 <TouchableOpacity onPress={ ()=>{alert('clicked')}}>
                     <Image source={{uri:'icon_homepage_message_pressed_android'}} style={styles.navRightImgStyle}/>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={ ()=>{alert('clicked')}}>
                     <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                 </TouchableOpacity>
              </View>
         </View>
    )
  },

  //挑转到二级页面
  pushToDetail(){
    this.props.navigator.push(
      {
        component:HomeDetail,
        title:'详情页' 
      }
    );
  }
});

const styles = StyleSheet.create({
  navBarStyle: {  //导航条整体
     height: Platform.OS === 'ios' ?64:44,
     backgroundColor:'rgba(295,96,0,1.0)',
     flexDirection:'row',  //主轴方向横
     alignItems:'center',   //侧轴垂直居中，居中针对导航条的高度
     justifyContent:'space-around'  //主轴对齐方式 空－主－空
  },
  rightNavViewStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  topInputStyle:{  //设置输入框
     width: width * 0.71,
     height:Platform.OS === 'ios' ? 35:30,
     marginTop: Platform.OS === 'ios' ? 18 : 0,
     backgroundColor:'white',
     borderRadius:14,  
     paddingLeft:8  
  },
  navRightImgStyle: {  //设置搜索框右侧图片
    width:Platform.OS === 'ios' ? 28:24,
    height:Platform.OS === 'ios' ? 28:24,
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = Home;
