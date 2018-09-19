import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import Expo,{Asset} from "expo";

import HomeScreen from "./src/HomeScreen/index.js";
import Start from "./components/Start.js";
import SignUp from "./components/SignUp.js";
import {Switch1} from './navigation/Router'
import Loading from "./components/loading.js";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      CourierNew: require("./assets/fonts/CourierNew.ttf"),
    });
    await Expo.Asset.loadAsync([
      require('./assets/logo.png'),
      require('./assets/TechNewsLogo.png'),
      require('./assets/start.png')
    ])
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Loading/>;
    }
    return <Switch1 />;
  }
}
