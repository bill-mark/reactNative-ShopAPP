import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

export default class MyCell extends Component {
 constructor(props){
    super(props);
    this.state = {
      leftIconName:'',
      leftTitle:'',
      rightIconName:'',
      rightTitle:''
    }
 }

  render() {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                 {/*--left--*/}
                  <View style={styles.leftViewStyle}>
                      <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle}/>
                      <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                  </View> 
                  {/*--right--*/}
                  <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                  </View>  
            </View>
        </TouchableOpacity>  
    );
  }

  //右边的内容
  rightSubView(){
      return(
           <View style={{flexDirection:'row',alignItems:'center'}}>
               {this.renderRightContent()}
               {/*箭头*/}
               <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,marginRight:8,marginLeft:5}}/>
           </View>
      )
  }

  //右边具体返回的值
  renderRightContent(){
       if(this.state.rightIconName.length == 0){  
           return(
              <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
           )
       }else{
           reurn(
              <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}}/>
           )
       }
  }
}

const styles = StyleSheet.create({
  container: {
     flexDirection:'row',
     justifyContent:'space-between',
     backgroundColor:'white',
     alignItems:'center',
     height:Platform.OS == 'ios'?40:36,
     borderBottomColor:'#e8e8e8',  //下拉框
     borderBottomWidth:0.5,
  },
  leftViewStyle:{
     flexDirection:'row',
     alignItems:'center',
     marginLeft:8,
  },
  rightViewStyle:{

  },
  leftImgStyle:{  //左边的图片
      width:24,
      height:24,
      marginRight:6,
      borderRadius:12
  },
  leftTitleStyle:{
      fontSize:16
  }
});
