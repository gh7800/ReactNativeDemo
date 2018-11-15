/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'home'
    };
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {//组件安装之前的时候调用
    }

    componentDidMount() {//组件安装完成之后调用
    }

    componentWillReceiveProps() {//组件将要更新的时候调用这个方法
    }

    componentDidUpdate() {//组件更新完成的时候调用
    }

    componentWillUpdate() {//组件将要更新的时候调用
    }

    render() {
        return (
            <ScrollView style={myStyle.container}>
                <Text style={myStyle.hello}>hello,react-native/n首页</Text>
                <Text style={myStyle.hello}>hello,react-native/n首页</Text>
                <Text style={myStyle.hello}>hello,react-native/n首页</Text>
            </ScrollView>
        );
    }

}
const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hello: {
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 22,
        color: '#407fff'
    },
});
