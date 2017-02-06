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
  Navigator
} from 'react-native';

var LaunchImage = require('./Component/Main/XMGLaunchImage');

export default class XMGBuy extends Component {
   render() {
    return (
        <Navigator 
          initialRoute={{name:'启动页',component:LaunchImage}}
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
    );
  }
}

AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
