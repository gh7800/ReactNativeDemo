import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button } from 'react-native';
import { INSPECT_MAX_BYTES } from 'buffer';

class PropsComponent extends Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        )
    };
};

export default class Login extends Component {

    render() {
        return (
            <View style = {{flex:1,alignItems:'center'}}>

                <Text style = {{fontSize:22}}>确定</Text>

            </View>
        )
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
  