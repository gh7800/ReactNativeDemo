import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, ToastAndroid, ActivityIndicator, TouchableOpacity } from 'react-native';

let width = Dimensions.get('window').width;
// console.log('width:',width);

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
            animatingt: false,
            edUsername: '',
            edPassword: ''
        }
    }

    //接收参数
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
    });


    _onChangText(input) {
        // edUsername = input;
        this.setState({
            edUsername:input
        })
        console.log('edUsername:', this.state.edUsername);
    }

    _pwChangText(input) {
        // edPassword = input;
        this.setState({
            edPassword : input
        })
        console.log('edPassword:', this.state.edPassword);
    }

    btOnClick() {

        console.log('username:', this.state.edUsername+this.state.edPassword);

        if (!this.state.edUsername) {
            ToastAndroid.show('请输入账号', ToastAndroid.SHORT);
        } else if (!this.state.edPassword) {
            ToastAndroid.show('请输入密码', ToastAndroid.SHORT);
        
        } else {
            function login(usname,pwd) {
                console.log('登录中...'+usname);
                fetch('http://xchw.xchw.online/api/system/login'
                    , {
                        method: 'POST',
                        headers: {
                            'client-type': 'android',
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            'login-type': 'username',
                            'username':usname,
                            'password': pwd,
                            'department_uuid': 'dept-hl'
                        })
                    }
                ).then(response => response.json())
                    .then(responseJson => {
                        ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
                        console.log('json', responseJson);

                    })
                    .catch(error => {
                        console.log('error:', error);
                    })
            }
            login(this.state.edUsername,this.state.edPassword)
        }
    };

    render() {
        return (
            <View style={styles.par}>


                <ActivityIndicator style={[flex = 1, alignItems = 'center', justifyContent = 'center']} size='large' animating={this.state.animatingt}></ActivityIndicator>


                <View style={styles.container}>
                    <TextInput style={styles.us}
                        placeholder={'请输入账号'}
                        keyboardType='numeric'
                        onChangeText={this._onChangText.bind(this)}
                    />

                    <TextInput style={styles.pw}
                        placeholder={'请输入密码'}
                        keyboardType='email-address'
                        onChangeText={this._pwChangText.bind(this)}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={this.btOnClick.bind(this)}>
                    <Text style={styles.submit} >登录</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
    },
    us: {
        width: width - 48,
        height: 48,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        borderRadius: 6,
        borderWidth: 2,
    },
    pw: {
        width: width - 48,
        height: 48,
        marginTop: 20,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        borderRadius: 6,
        borderWidth: 2,
    },
    submit: {
        width: width - 48,
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
        justifyContent: 'space-between',
        width: width,
        height: 48,
        marginTop: 8
    },
    textLeft: {
        marginLeft: 24,
        textAlignVertical: 'center',
        fontSize: 14,
        justifyContent: 'flex-start'
    },
    textRight: {
        flex: 1,
        fontSize: 14,
        textAlignVertical: 'center',
        textAlign: 'right',
        marginRight: 24
    }
});

