import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드

export default class MainScreen extends Component {
    
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
      }

    render(){
        return (
            <View style={StyleSheet.container}>
                <Text>MainScreen</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex :1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});