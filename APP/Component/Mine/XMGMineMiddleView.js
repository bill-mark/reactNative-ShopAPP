import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var MineMiddleView = React.createClass({
  render() {
    return (
      <View style={styles.container}>
          <InnerView />
      </View>
    );
  }
});

var InnerView = React.createClass({
  getDefaultProps(){
      return{
          iconName:'',
          title:''
      }
  },

   render(){
       return(
           <View>
               <Image source={{uri: this.props.iconName}} style={{width:30,height:20}}/>
               <Text>{this.props}</Text>
           </View>
       )
   }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = MineMiddleView;