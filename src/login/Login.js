import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions, ToastAndroid, TouchableOpacity, Modal} from 'react-native';
import {Loading} from '../utils/Loading';
import {Toast} from '../utils/Toast';
import Constans from '../utils/Constans';
import StoreUtil from '../utils/StoreUtil';
import _ from 'lodash';
import HTTPUtil from '../http/HTTPUtil';

let width = Dimensions.get('window').width;
let msg = null;
let token = null;

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
            animatingState: false,
            edUsername: '',
            edPassword: '',
            modalVisible: false
        }
    }

    componentWillMount() {
        console.log('--componentWillMount');

        StoreUtil.getKeyData(Constans.TOKEN)
            .then((value) => {
                token = value;
            });
        StoreUtil.getKeyData(Constans.USERNAME)
            .then((value) => {
                this.setState({
                    edUsername: value,
                })
            });
    }

    /**
     * 可优化性能
     * 如果状态没有改变，就不重新渲染
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {

        HTTPUtil.get()
        // console.log('tag', this.state.edUsername);
        // if (!_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)) {
        //     console.log('shouldComponentUpdate', 'true');
        //     return true
        // } else {
        //     console.log('shouldComponentUpdate', 'false');
        //     return false
        // }

        return true
    }

    /**
     * 组件卸载的时候执行
     */
    componentWillUnmount() {
        console.log('component: ', 'componentWillUnmount');
        // this.timer && clearTimeout(this.timer)
    }

    //接收参数
    // static navigationOptions = ({ navigation }) => ({
    //     headerTitle: navigation.state.params.title,
    // });


    _onChangText(input) {
        this.setState({
            edUsername: input
        });
    }

    _pwChangText(input) {
        this.setState({
            edPassword: input
        });
    }

    btOnClick() {
        let that = this

        console.log('username:', this.state.edUsername + '\r' + this.state.edPassword);

        if (!this.state.edUsername) {
            ToastAndroid.show('请输入账号', ToastAndroid.SHORT);
        } else if (!this.state.edPassword) {
            ToastAndroid.show('请输入密码', ToastAndroid.SHORT);
        } else {
            Loading.show(Constans.loading);

            // noinspection JSAnnotator
            function login(usname, pwd) {
                fetch('http://xchw.xchw.online/api/system/login'
                    , {
                        method: 'POST',
                        headers: {
                            'client-type': 'watch',
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            'login-type': 'username',
                            'username': usname,
                            'password': pwd,
                            'department_uuid': 'dept-hl'
                        })
                    }
                ).then(response => response.json())
                    .then(responseJson => {
                        console.log('json', responseJson.data.token);

                        // Toast.showSuccess(responseJson.message);

                        if (!responseJson.success) {
                            Loading.hidden();
                            return;
                        }

                        token = responseJson.data.token;
                        StoreUtil.insertData(Constans.TOKEN, token);

                        console.log('settime');
                        that.timer = setTimeout(() => {
                            // Loading.hidden();
                            console.log('thissssss', this);
                            that.getUserMsg()
                        }, 2000);


                    })
                    .catch(error => {
                        console.log('error:', error);
                    })
                    // .then(() => this.getUserMsg)
            }

            login(this.state.edUsername, this.state.edPassword)
        }
    };

    getUserMsg() {
        // Loading.show('获取user信息')
        fetch('http://xchw.xchw.online/api/common/group/user-msg'
            , {
                method: 'POST',
                headers: {
                    'client-type': 'watch',
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    'login-type': 'device_id',
                    'watch_uuid': '862107030801336',
                    'department_uuid': 'dept-hl'
                })
            }
        )
            .then(response => response.json())
            .then(responseJson => {
                // console.log('json', responseJson.data);
                // Toast.showSuccess(responseJson.message);
                if (!responseJson.success) {
                    Loading.hidden();
                    return;
                }
                let username = responseJson.data.username;
                let realname = responseJson.data.realname;
                StoreUtil.insertData(Constans.USERNAME, username);
                StoreUtil.insertData(Constans.REALNAME, realname);

                this.timer1 = setTimeout(() => {
                    Loading.hidden();
                    this.props.navigation.navigate('tab')
                }, 2000);
            })
            .catch(error => {
                console.log('error:', error);
            })

    };

    render() {
        // const {navigate} = this.props.navigation;
        console.log('render（）');

        return (
            <View style={styles.par}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onShow={() => {
                        alert(msg);
                    }}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                />
                <View style={styles.container}>
                    <TextInput style={styles.us}
                               placeholder={'请输入账号'}
                               keyboardType='numeric'
                               value={this.state.edUsername}
                               onChangeText={this._onChangText.bind(this)}
                    />

                    <TextInput style={styles.pw}
                               placeholder={'请输入密码'}
                               keyboardType='email-address'
                               value={this.state.edPassword}
                               onChangeText={this._pwChangText.bind(this)}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={this.btOnClick.bind(this)}>
                        <Text style={styles.submit}>登录</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.layout}>
                    <TouchableOpacity style={{marginTop: 10}} activeOpacity={0.5} onPress={this.getUserMsg.bind(this)}>
                        <Text style={styles.textLeft}>忘记密码?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 10}} activeOpacity={0.5}>
                        <Text style={styles.textRight}>注 册</Text>
                    </TouchableOpacity>
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
        textAlignVertical: 'center'
    },
    pw: {
        width: width - 48,
        height: 48,
        marginTop: 20,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        borderRadius: 6,
        borderWidth: 2,
        textAlignVertical: 'center'
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
        textAlignVertical: 'top',
        textAlign: 'right',
        marginRight: 24
    }
});

