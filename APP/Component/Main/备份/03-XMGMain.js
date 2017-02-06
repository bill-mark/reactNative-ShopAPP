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
  Image,
  Platform,   //判断系统
  Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/XMGMore');

var Main = React.createClass({
  //初始化，状态机角色
  getInitialState(){
    return{
      selectedTab:'home'
    }
  },

  render() {
    return (
      <TabNavigator>
          {/*--首页--*/}
          <TabNavigator.Item
            title="首页"
            renderIcon={() => <Image source={{uri:'icon_tabbar_homepage.png'}} style={styles.iconStyle} />}
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
            onPress={() => this.setState({selectedTab:'home'})}  //点击执行此函数
            selected={this.state.selectedTab === 'home'} //若值为真则被选中
          >
            <Navigator 
              initialRoute={{name:'首页',component:Home}}
              configureScene={
                () => {
                   return Navigator.SceneConfigs.PushFromRight;
                }
              }
              renderScene={
                  (route,navigator) => {
                      let Component = route.component;
                      return <Component {...route.passProps} navigator={navigator}/>;
                  }
              }
            />
          </TabNavigator.Item>

          {/*--商家--*/} 
          <TabNavigator.Item
            title="商家"
            renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle} />}
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
            onPress={() => this.setState({selectedTab:'shop'})}  //点击执行此函数
            selected={this.state.selectedTab === 'shop'}
          >
              <Navigator 
              initialRoute={{name:'商家',component:Shop}}
              configureScene={
                () => {
                   return Navigator.SceneConfigs.PushFromRight;
                }
              }
              renderScene={
                  (route,navigator) => {
                      let Component = route.component;
                      return <Component {...route.passProps} navigator={navigator}/>;
                  }
              }
            />
          </TabNavigator.Item>

          {/*--我的--*/}
          <TabNavigator.Item
            title="我的"
            renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle} />}
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
            onPress={() => this.setState({selectedTab:'mine'})}  //点击执行此函数
            selected={this.state.selectedTab === 'mine'}
          >
               <Navigator 
                 initialRoute={{name:'我的',component:Mine}}
                 configureScene={
                  () => {
                     return Navigator.SceneConfigs.PushFromRight;
                  }
                 }
                 renderScene={
                     (route,navigator) => {
                         let Component = route.component;
                         return <Component {...route.passProps} navigator={navigator}/>;
                     }
                 }
               />
          </TabNavigator.Item>

          {/*--更多--*/}
          <TabNavigator.Item
            title="更多"
            renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyle} />}
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}
            onPress={() => this.setState({selectedTab:'more'})}  //点击执行此函数
            selected={this.state.selectedTab === 'more'}
          >
               <Navigator 
                 initialRoute={{name:'更多',component:More}}
                 configureScene={
                  () => {
                     return Navigator.SceneConfigs.PushFromRight;
                  }
                 }
                 renderScene={
                     (route,navigator) => {
                         let Component = route.component;
                         return <Component {...route.passProps} navigator={navigator}/>;
                     }
                 }
               />
          </TabNavigator.Item>
      </TabNavigator>
    );
  }
});

const styles = StyleSheet.create({
  iconStyle: {
      width: Platform.os === 'ios' ? 30:25, //如果系统是ios则宽为30反之为25
      height:Platform.os === 'ios' ? 30:25
  }
});

module.exports = Main;
