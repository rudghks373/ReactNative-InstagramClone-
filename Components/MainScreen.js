import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'; 

//하단 탭에 들어갈 컴포넌트
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

const AppTabNavigator = createMaterialTopTabNavigator ({
HomeTab: {screen: HomeTab},
SearchTab: {screen: SearchTab},
AddMediaTab: {screen: AddMediaTab},
LikesTab: {screen: LikesTab},
ProfileTab: {screen: ProfileTab}
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {backgroundColor: 'white'},
    iconStyle: { height: 100 },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

  // navigationOptions 코드 추가
  static navigationOptions = {
    header: null,
    title: 'Instagram',
    
    
  }

  render() {
    return (
        <AppTabContainet/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});