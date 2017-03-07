import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native';

import MyCell from './CommonMyCell';
import MineMiddleView from './MineMiddleView';
import MineHeaderView from './MineHeaderView';
import More from './More';  //设置场景组件

export default class Mine extends Component {
    navigate(type = 'Normal') {
        this.props.navigator.push({
          component: More,        
          type: type
        })
    }

    render() {
    	return (
            <ScrollView
                style={styles.ScrollViewStyle}
                contentInset={{top:-200}}
                contentOffset={{y:200}}
            >
                <MineHeaderView               
                  test={this.navigate.bind(this)}
                />
                <View style={styles.CellStyle}>
                    <MyCell 
                         leftIconName="collect"
                         leftTitle="我的订单"
                         rightTitle="查看全部订单"
                    />
                    <MineMiddleView />
                </View>

                <View style={styles.CellStyle}>
                     <MyCell 
                        leftIconName="draft"
                        leftTitle="钱包"
                        rightTitle="账户余额:100元"
                     />

                     <MyCell 
                        leftIconName="like"
                        leftTitle="抵用券"
                        rightTitle="10张"
                     />
                </View>   
                <View style={styles.CellStyle}>
                     <MyCell 
                        leftIconName="card"
                        leftTitle="我的评价"
                     />
                     <MyCell 
                        leftIconName="new_friend"
                        leftTitle="我的收藏"   
                                      
                     />   
                </View> 
                
                <View style={styles.CellStyle}>
                     <MyCell 
                        leftIconName="pay"
                        leftTitle="分享app"
                     />
                     
                </View> 
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
	ScrollViewStyle: {
		backgroundColor:'#e8e8e8'
	},
    CellStyle: {
    	marginTop:20
    }
})