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
          {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
          {/*--商家--*/} 
          {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
          {/*--我的--*/}
          {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
          {/*--更多--*/}
          {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
      </TabNavigator>
    );
  },

  //每个tabitem
  renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component,badgeText){
    return(
       <TabNavigator.Item
         title={title}  //值为变量，加{}
         renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle} />}
         renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.iconStyle}/>}
         onPress={() => this.setState({selectedTab:selectedTab})}  //点击执行此函数
         selected={this.state.selectedTab === selectedTab} //若值为真则被选中
         selectedTitleStyle={styles.selectedTitleStyle}
         badgeText = {badgeText}
       >
             <Navigator 
               initialRoute={{name:componentName,component:component}}
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
    )
  }
});

const styles = StyleSheet.create({
  iconStyle: {
      width: Platform.OS === 'ios' ? 30:25, //如果系统是ios则宽为30反之为25
      height:Platform.OS === 'ios' ? 30:25
  },
  selectedTitleStyle:{
      color:'orange'
  }
});

module.exports = Main;
