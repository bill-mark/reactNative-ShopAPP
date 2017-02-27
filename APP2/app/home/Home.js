import React,{Component} from'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  WebView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      detailUrl:'http://www.djk365.com.cn'  //正式上线要替换成https
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView  style={styles.WebView}
              automaticallyAdjustContentInsets={true}
              source={{uri: this.state.detailUrl}}
              javaScriptEnabled={true} //开通安卓端js支持
              domStorageEnabled={true} //开启安卓端DOM
              decelerationRate="normal" //ios触摸滚动
              startInLoadingState={true} //加载loading
              scalesPageToFit={true}  //自适应
        />

        {/*首页导航条*/}
        {this.renderNavBar()}
      </View>
    );
  }

  renderNavBar(){
    return (
       <View style={styles.navBarStyle}>
          <Text style={styles.leftText}>
             搜索
          </Text>
          <TextInput 
             placeholder="输入商家或商品名"
             style={styles.topInputStyle}
          />
          <View style={styles.rightNavViewStyle}>
             <TouchableOpacity onPress={ ()=> {alert('clecked')}}>
                <Image source={{uri:'icon_homepage_message_pressed_android'}} style={styles.navRightImgStyle}/>
             </TouchableOpacity>
          </View>
       </View>
    )
  }

}

const styles = StyleSheet.create({
  navBarStyle: {  //导航条整体
     height: Platform.OS === 'ios' ?64:44,
     backgroundColor:'rgba(295,96,0,1.0)',
     flexDirection:'row',  //主轴方向横
     alignItems:'center',   //侧轴垂直居中，居中针对导航条的高度
     justifyContent:'space-around',  //主轴对齐方式 空－主－空
     top:-555, //覆盖网页导航条
  },
  rightNavViewStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  topInputStyle:{  //设置输入框
     width: width * 0.71,
     height:Platform.OS === 'ios' ? 35:30,
     marginTop: Platform.OS === 'ios' ? 18 : 0,
     backgroundColor:'white',
     borderRadius:14,  
     paddingLeft:8  
  },
  navRightImgStyle: {  //设置搜索框右侧图片
    width:Platform.OS === 'ios' ? 28:24,
    height:Platform.OS === 'ios' ? 28:24,
  },
  leftText:{
    color:'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  WebView: {
    marginTop:-22,
    marginBottom: -175,  //隐藏网页自带的底部导航
  }
});



