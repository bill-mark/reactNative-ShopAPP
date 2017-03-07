import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Navigator  
} from 'react-native';

import More from './More';
// 导入系统类
var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;


 class HeaderView extends Component {
    render () {
        return (
           <Navigator 
              initialRoute = {{id:"main1"}}
              renderScene = {this.renderNav}           
           />
        ) 
    }

    renderNav(route,nav) {
        switch (route.id) {
            case 'main1' :
                  return <MainScreen navigator={nav} title="Main1" />;
            case 'detail' :
                return (<More navigator={nav} title="More" />);
        }
    }

}


export default class  MainScreen extends Component {
      pushToSet() {
          // alert(this.props.navigator)
          this.props.navigator.push({id:"detail"})   
      }

      render() {
          return (
              <View style={styles.container}>
                  {this.renderTopView()}               
              </View>
          );
      }

      renderTopView(){
          return(
              <View style={styles.topViewStyle}>
                  <Image source={{uri:'see'}} style={styles.leftIconStyle} />
                  
                  <View style={styles.conterViewStyle}>
                      <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>网购达人</Text>
                      <Image source={{uri:'avatar_vip'}} style={{width:17,height:17}} />
                  </View>

                  <TouchableOpacity 
                          onPress={ this.pushToSet } 
                          style={styles.rightViewStyle}
                  >
                     <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>  
                  </TouchableOpacity> 
              </View>

              
          )
      }
}


const styles = StyleSheet.create({
    container: {
        height:Platform.OS == 'ios'?315 : 115,
        backgroundColor:'rgb(255,96,0)'
    },
    topViewStyle:{
        flexDirection:'row',
        marginTop:Platform.OS == 'ios'?240:40,
        alignItems:'center',
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)',
    },
    conterViewStyle:{
        flexDirection:'row',
        width:screenW * 0.6,
    },
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
    },
    bottomInnerViewStyle:{
        width:(screenW/3)+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',

        justifyContent:'center',
        alignItems:'center',

        borderRightWidth:1,
        borderRightColor:'white'
    },
    navImageStyle: {
      width:Platform.OS === 'ios' ? 28:24,
      height:Platform.OS === 'ios' ? 28:24,
    }
});











