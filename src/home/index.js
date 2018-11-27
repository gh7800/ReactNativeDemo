/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import work_normal from '../res/work_normal.png';
import work_pressed from '../res/work_pressed.png';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Home extends Component {

    static navigationOptions = {
        tabBarLabel: '首页',
        header: null,
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image resizeMode='contain' source={require('../res/contact_pressed.png')}
                           style={{width: 15, height: 15}}/>
                )
            }
            return (
                <Image resizeMode='contain' source={require('../res/contact_normal.png')}
                       style={{width: 15, height: 15}}/>
            );
        },
    };

    constructor(props) {
        super(props);
        this.listHeaderComponent = this.listHeaderComponent.bind(this)
        this.listFooterComponent = this.listFooterComponent.bind(this)
        this.separatorComponent = this.separatorComponent.bind(this)
        this.state = {
            data: [{key: '作业', img: work_normal},
                {key: '检查', img: work_pressed}],
            refreshing: false

        }
    }

    componentWillMount() {//组件安装之前的时候调用
    }

    /*分割线*/
    separatorComponent() {
        return <View style={{height: 1, backgroundColor: 'red'}}/>
    }

    /*底部组件*/
    listFooterComponent() {
        return this.state.data.length !== 0 ? <View>
            <Text style={{alignItems: 'center', textAlign: 'center'}}>我是底部组件</Text>
        </View> : null;
    }

    /*头部组件*/
    listHeaderComponent() {
        return this.state.data.length !== 0 ? <View>
            <Text style={{alignItems: 'center', textAlign: 'center'}}>我是头部组件</Text>
        </View> : null;
    }

    onRefresh() {
        this.setState({
            data: [{key: '作业', img: work_normal},
                {key: '检查', img: work_pressed},
                {key: '设置', img: work_pressed}],
            refreshing: true,
        });
        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 2000)
    }
    createEmptyView() {
        return (
            <Text style={{fontSize: 40, alignSelf: 'center'}}>还没有数据哦！</Text>
        );
    }

    render() {
        return (
            <View style={myStyle.container}>
                {/*<Text style={myStyle.hello}>home</Text>*/}
                <FlatList
                    // ListEmptyComponent={this.createEmptyView()}
                    data={this.state.data}
                    renderItem={({item,index}) =>
                        <TouchableOpacity activeOpacity={0.6} style={myStyle.column}
                                          onPress={()=>{
                                          this.itemClick(item,index)
                                          }
                                          }>
                            <View style={myStyle.column}>
                                <Image source={item.img} style={myStyle.itemimg}/>
                                <Text style={myStyle.hello}>{item.key}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    numColumns={2}
                    // columnWrapperStyle={{borderWidth: 2, borderColor: 'black'}}
                    // ItemSeparatorComponent={this.separatorComponent} // 分割线
                    // horizontal={false} // 水平还是垂直
                    refreshing = {this.state.refreshing}
                    onRefresh={() => this.onRefresh()}
                    // ListFooterComponent={this.listFooterComponent} // 底部组件
                    // ListHeaderComponent={this.listHeaderComponent} // 头部组件

                />
            </View>
        );
    }

    itemClick(item,index) {
        console.log('TAG', index);
    }
};


const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    hello: {
        width: Dimensions.get('window').width / 2,
        height: 45,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 22,
        color: '#407fff'
    },
    img: {
        width: 15,
        height: 15,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 2 - 10,
        height: 120,
        backgroundColor: '#f5f5f5',
        margin: 5,

    },
    itemimg: {
        backgroundColor: '#f5f5f5',
        width: 20,
        height: 20,
        resizeMode: 'center',
        marginBottom: 15
    }
});
