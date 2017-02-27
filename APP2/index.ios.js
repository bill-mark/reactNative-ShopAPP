import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './app/main/Main'

export default class djk extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('djk', () => djk);
