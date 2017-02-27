import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';


var CommonMoreCell = require('./CommonMoreCell')

export default class More extends Component {
  _back() {
      this.props.navigator.pop();
  }

  render() {
    return (
          <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
            
                <ScrollView>
                    <View style={{marginTop:20}}>
                          <CommonCell 
                              title="个人资料"
                          />                
                    </View>
                    <View style={{marginTop:20}}>
                          <CommonCell 
                              title="省流量模式"
                              isSwitch={true}
                          /> 
                          <CommonCell 
                              title="消息提醒"
                          /> 
                          <CommonCell 
                              title="账户与安全"
                          /> 
                          <CommonCell 
                              title="清空缓存"
                              rightTitle="1.99"
                          />                
                    </View>
                    <View style={{marginTop:20}}>
                          <CommonCell 
                              title="意见反馈"
                          /> 
                          <CommonCell 
                              title="支付帮助"
                          /> 
                          <CommonCell 
                              title="关于大健康"
                          />                
                    </View>
                </ScrollView>

                <TouchableOpacity onPress={this._back}>
                  <Text >back on</Text>
                </TouchableOpacity>

          </View>
    );
  }

  //导航条
  renderNavBar(){
    return(
      <View style={styles.navOutViewStyle}>
           <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>
           <TouchableOpacity onPress={()=>{alert('cilck')}} style={styles.rightViewStyle}>
              <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
           </TouchableOpacity>   
      </View>
    )
  }

}

const styles = StyleSheet.create({
  rightViewStyle: {
    position:'absolute',
    right:10,
    bottom:15
  },
  navImageStyle: {
    width:Platform.OS === 'ios' ? 28:24,
    height:Platform.OS === 'ios' ? 28:24,
  },
  navOutViewStyle: {
    height: Platform.OS === 'ios' ?64:44,
    backgroundColor:'rgba(295,96,0,1.0)',
    flexDirection:'row',  //主轴方向横
    alignItems:'center',   //侧轴垂直居中，居中针对导航条的高度
    justifyContent:'center',//主轴居中
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





