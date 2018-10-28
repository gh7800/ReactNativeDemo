/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {
  constructor(){

  }
  componentWillMount(){//组件安装之前的时候调用
    
  }
  
  componentDidMount(){//组件安装完成之后调用

  }
  componentWillReceiveProps(){//组件将要更新的时候调用这个方法

  }
  componentDidUpdate(){

  }
  componentWillUpdate(){

  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
        <Text style={styles.hello}>hello,react-native</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  hello:{
    flex:1,
    marginTop: 100,
    color:'#ff00ff',
    fontSize:56,
  },
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize:22,
    color:'#ffffff',
  },
});
