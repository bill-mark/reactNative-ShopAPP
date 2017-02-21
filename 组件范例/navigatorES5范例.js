var React = require('react');
 import {
   View,
   Text,
   StyleSheet,
   AppRegistry,
   TouchableHighlight,
   Navigator,
 } from 'react-native';

 var LHWeather  = React.createClass({
    render(){
      return (
        <Navigator
          style = {styles.container}
          initialRoute={{id:"main",}}
          renderScene={this.renderNav}
          />
      );
    },
    renderNav(route,nav){
        switch (route.id) {
          case 'main':
            return <MainScreen navigator={nav} title="Main"/ >;
          case 'detail':
            return (<DetailScreen navigator={nav} title="Detail"/ >);
        }
    }
 });

 var MainScreen = React.createClass({
   toDetail(){
     this.props.navigator.push({id:"detail"});
  },
   render(){
     return (
       <View style={styles.containView}>
         <TouchableHighlight
          style={styles.button}
          onPress={this.toDetail}
          underlayColor="#B5B5B5">
            <Text style={styles.blackText}>=>详情页</Text>
         </TouchableHighlight>
       </View>
     );
   }
 });
 var DetailScreen = React.createClass({
   toMain(){
     this.props.navigator.pop();
   },
   render(){
     return (
       <View style={styles.detailContainView}>
         <TouchableHighlight
          style={styles.button}
          onPress={this.toMain}
          underlayColor="green">
            <Text style={styles.blackText}>{'主页<='}</Text>
         </TouchableHighlight>
       </View>
     );
   }
 });
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   button: {
     padding: 15,
   },
   containView:{
     flex: 1,
     justifyContent: 'center',
   },
   detailContainView:{
     flex:1,
     justifyContent: 'center',
     backgroundColor:'green',
   },
   blackText:{
     fontSize:20,
     textAlign:'center',
   },
 });
 AppRegistry.registerComponent('LHWeather', () => LHWeather);

 http://blog.csdn.net/Hello_Hwc/article/details/51444540