import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

export default class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            detailUrl:'' //要https 
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*导航*/}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </View>
        );
    }

    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={styles.topText}>购物车</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    
    navOutViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',
        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },

    topText:{
       marginTop:11,
       color:'white', 
       fontSize:18, 
       fontWeight:'bold',

    },   
});
