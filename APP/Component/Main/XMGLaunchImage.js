import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Main = require('./XMGMain');

var Launch = React.createClass({
  render() {
    return (
      <Image source={{uri:'launchimage'}} style={styles.launchImageStyle}/> 
    );
  },

  //复杂操作：定时器，网络请求 
  componentDidMount(){
     setTimeout( ()=>{
          //页面切换
          this.props.navigator.replace({component:Main});
     },1300);
  }
});

const styles = StyleSheet.create({
  launchImageStyle:{
    flex:1
  }
});

module.exports = Launch;
