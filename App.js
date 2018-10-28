/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AndroidToast from './src/AndroidToast';
import CallBack from './src/CallBack'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  _toast() {
    AndroidToast.show('我是一个toast', AndroidToast.SHORT);
    // NativeModules.mytoast.show('弹窗toast', NativeModules.mytoast.SHORT)

  }
  _callback() {
    CallBack.jisuan(2, 3, (code, result) => {
      console.log('callback', code, result);
      AndroidToast.show(code + result, AndroidToast.SHORT);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this._toast}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions} onPress={this._callback}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  },
});
