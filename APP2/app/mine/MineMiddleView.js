import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


import MiddleData from './MiddleData.json';

class MineMiddleView extends Component {
  render() {
    return (
      <View style={styles.container}>
           {this.renderAllItem()}
      </View>
    );
  }

  renderAllItem(){
    //定义组件数组
    var itemArr = [];
    //遍历
    for(var i=0;i<MiddleData.length;i++){
      //取出单独的数据
      var data = MiddleData[i];
      //创建组件装入数组
      itemArr.push(<InnerView key={i} iconName={data.iconName} title={data.title} />);
    }
    //返回
    return itemArr;
  }
}

class InnerView extends Component{
  constructor(props){
    super(props);
    this.state = {
      iconName:'',
          title:''
    }
  }

   render(){
       return(
           <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('0')}}>
               <View style={styles.InnerViewStyle}>
                  <Image source={{uri:this.props.iconName}} style={{width:40, height:30,marginBottom:3}}/>
                  <Text style={{color:'gray'}}>{this.props.title}</Text>
               </View>
           </TouchableOpacity>
       )
   }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent:'space-around'
  },
  InnerViewStyle:{
    width:70,
    height:70,
    justifyContent:'center',
    alignItems:'center'
  }
});

module.exports = MineMiddleView;
