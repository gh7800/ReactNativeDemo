import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions, ToastAndroid, Alert} from 'react-native';

let {width} = Dimensions.get('window');
let edUsername = null;
let edPassword = null;

/**
 * 登录页
 */

export default class Login extends Component {

    constructor(props) {
        super(props);
        this._onChangText = this._onChangText.bind(this);
        this._pwChangText = this._pwChangText.bind(this);

        this.state = {
            tit: '登录',
        }
    }

    //接收参数
    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params.title,
    });


    _onChangText(input) {
        console.log('input:', input);
        edUsername = input;
    }

    _pwChangText(input) {
        edPassword = input
    }

    btOnClick() {
        console.log('username:', edUsername);

        if (edUsername === null || 0 === edUsername.length) {
            ToastAndroid.show('请输入账号', ToastAndroid.SHORT);
        } else if (edPassword === null || 0 === edPassword.length) {
            ToastAndroid.show('请输入密码', ToastAndroid.SHORT);
        } else {
            // noinspection JSAnnotator
            function login(){
                console.log('loading');

                fetch('https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json'
                //     , {
                //     method: 'POST',
                //     headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/x-www-form-urlencoded',
                //         'client-type': 'android'
                //     },
                //     body: {
                //         'login_type': 'username',
                //         'username': '60001',
                //         'password': '60001',
                //         'device_id': '123456789xx'
                //     }
                // }
                ).then(response => response.json())
                    .then(responseJson => {
                        console.log(responseJson);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
            login()
        }
    };

    render() {
        // width = width - 48;
        return (
            <View style={styles.par}>
                <View style={styles.container}>
                    <TextInput style={styles.us}
                               placeholder={'请输入账号'}
                               keyboardType='numeric'
                               onChangeText={this._onChangText}
                        // value={this.state.username}
                    />

                    <TextInput style={styles.pw}
                               placeholder={'请输入密码'}
                               keyboardType='visible-password'
                               onChangeText={this._pwChangText}
                        //    value={this.state.password}
                    />

                    <Text style={styles.submit} onPress={this.btOnClick}>登录</Text>
                </View>
                <View style={styles.layout}>
                    <Text style={styles.textLeft}>忘记密码?</Text>
                    <Text style={styles.textRight}>注 册</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    par: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    container: {
        paddingTop: 100,
        // justifyContent: 'center',垂直居中
        alignItems: 'center',//水平居中
    },
    us: {
        width: 432,
        height: 48,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        borderRadius: 6,
        borderWidth: 2,
    },
    pw: {
        width: 432,
        height: 48,
        marginTop: 20,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        borderRadius: 6,
        borderWidth: 2,
    },
    submit: {
        width: 432,
        marginTop: 32,
        height: 48,
        borderRadius: 6,
        backgroundColor: '#407fff',
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    layout: {
        flexDirection: 'row',
        width: 432,
        height: 48,
        marginTop: 8
    },
    textLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 24,
        textAlignVertical: 'center',
        fontSize: 14
    },
    textRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        textAlign: 'right',
        alignSelf: 'center',
        fontSize: 14,
    }
});
