/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import StoreUtil from "../utils/StoreUtil";
import Constans from "../utils/Constans";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Mine extends Component {

    static navigationOptions = {
        tabBarLabel: '我的',
        header: null,
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image resizeMode='contain' style={myStyle.img} source={require('../res/contact_pressed.png')}/>
                )
            }
            return (
                <Image resizeMode='contain' style={myStyle.img} source={require('../res/contact_normal.png')}/>
            );
        },
    };

    constructor(props) {
        super(props);
        console.log('TAG', 'constructor');
        this.state = {
            rlName: null,
            userName: null,
        }

    }

    componentWillMount() {//组件安装之前的时候调用
        console.log('TAG','componentWillMount');
        StoreUtil.getKeyData(Constans.REALNAME)
            .then((value) => {
                this.setState({
                    rlName: value
                })
            })
        StoreUtil.getKeyData(Constans.USERNAME)
            .then((value) => {
                this.setState({
                    userName: value
                })
            })

    }

    render() {
        return (
            <View style={myStyle.container}>
                <View style={myStyle.column}>
                    <View style={myStyle.row}>
                        <Text style={myStyle.title}>账号：</Text>
                        <Text style={myStyle.content}>{this.state.userName}</Text>
                    </View>
                    <View style={myStyle.row}>
                        <Text style={myStyle.title}>名称：</Text>
                        <Text style={myStyle.content}>{this.state.rlName}</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={myStyle.bt} onPress={() => {
                    console.log('TAG', '删除缓存');
                    // todo
                }}>
                    <Text style={myStyle.bt}>退出登录</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const myStyle = StyleSheet.create({
    img: {
        width: 15,
        height: 15,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 16,
        paddingRight: 16,
        // backgroundColor:'#f5f5f5'
    },
    column:{
        flex: 1,
        flexDirection: 'column',
        // backgroundColor:'#f5f5f5'
    },
    row: {
        // flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#c5c5c5',
        justifyContent: 'space-between',
        marginTop: 6,
        borderRadius: 6,
        paddingLeft: 5,
        paddingRight: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        textAlignVertical: 'center',
    },
    content: {
        fontSize: 16,
        textAlignVertical: 'center',
        color:'black'
    },
    bt: {
        // flex: 1,
        width: Dimensions.get('window').width - 32,
        height: 50,
        backgroundColor: '#ff1403',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        borderRadius: 6,
        marginBottom: 10
    }
});
