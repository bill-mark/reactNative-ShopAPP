import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../home/Home';
import List from '../list/List';
import Cart from '../cart/Cart';
import Mine from '../mine/Mine';

export default class Main extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		selectedTab:'home'
  	}
  }

  render() {
    return (
      <TabNavigator>
        {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
        {this.renderTabBarItem('分类','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',List)}
        {this.renderTabBarItem('购物车','icon_tabbar_misc','icon_tabbar_misc_selected','cart','车',Cart)}
        {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
      </TabNavigator>
    );
  }

  renderTabBarItem(title,renderIcon,renderSelectedIcon,selectedTab,componentName,component,badgeText){
     return(
       <TabNavigator.Item
          title={title}
          renderIcon={ ()=> <Image source={{uri:renderIcon}} style={styles.iconStyle}/>}
          renderSelectedIcon={ ()=> <Image source={{uri:renderSelectedIcon}} style={styles.iconStyle}/>}
          onPress={ ()=>{this.setState({selectedTab:selectedTab})} }
          selected={ this.state.selectedTab === selectedTab}  //为真时选中
          selectedTitleStyle={styles.selectedTitleStyle}
          badgeText={ badgeText}
       >
          <Navigator
             initialRoute={{name:componentName,component:component}}
             configureScene={()=> {return Navigator.SceneConfigs.PushFromRight;} } //跳转动画
             renderScene={ 
             	(route,navigator)=>{
                      let Component = route.component;
                      return <Component {...route.passProps} navigator={navigator}/>
                } 
              }
          />
       </TabNavigator.Item>
     )
  }
  
};

const styles = StyleSheet.create({
    iconStyle:{
    	width:Platform.OS === 'ios'?30:25,
    	height:Platform.OS === 'ios'?30:25
    },
    selectedTitleStyle:{
    	color:'orange'
    }
})

