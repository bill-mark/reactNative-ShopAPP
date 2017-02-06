import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Switch
} from 'react-native';

var CommonCell = React.createClass({
  getDefaultProps(){
    return{
      title:'',//标题 
      isSwitch:false, //是否展示开关
      rightTitle:''
    }
  },

  getInitialState(){
    return{
      isOn:false
    }
  },

  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('666')}} >
          <View style={styles.container}>
             {/*左边*/}
             <Text style={{marginLeft:8}}>{this.props.title}</Text>
             {/*右边*/}
             {this.renderRightView()}
          </View>
      </TouchableOpacity>      
    );
  },

  //cell右侧显示的内容
  renderRightView(){
      if(this.props.isSwitch){     
         return(
             <Switch 
                 value={this.state.isOn}  
                 onValueChange={()=>{this.setState({isOn:!this.state.isOn})}}
             />       
         )
      }else{
          return(
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  {this.rightTitle()}
                  <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,marginRight:8}}/>
              </View> 
          )
      } 
  },

  rightTitle(){
      if(this.props.rightTitle.length > 0){
          return(
                 <Text style={{color:'gray',marginRight:3}}>{this.props.rightTitle+"M"}</Text>
          )
      }
  }
});

const styles = StyleSheet.create({
  container:{
      height:Platform.OS == 'ios'?40:30,
      backgroundColor:'white',
      borderBottomColor:'#dddddd',
      borderBottomWidth:0.5,
      flexDirection:'row',// 主轴方向 row横向
      justifyContent:'space-between',  //子元素沿着主轴的排列方式
      alignItems:'center'
  }
});

module.exports = CommonCell;
