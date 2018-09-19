import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
//import MainScreenNavigator from "../ChatScreen/index.js";
//import ProfileScreen from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator } from "react-navigation";
import WebView from "../web-view/WebView.js";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen ,},
    Chat: { screen: HomeScreen },
    ProfileScreen: { screen: HomeScreen },
    webview:{
      screen:WebView,
      navigationOptions: {
        drawerLockMode: 'locked-closed'
      },
    }
    
  },
  {
    contentComponent: props => <SideBar {...props} />,
    
    navigationOptions: {
      drawerLockMode: 'locked-close'
  },
  }
);
export default HomeScreenRouter;
