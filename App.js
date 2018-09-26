import Expo from "expo";
import React, { Component } from "react";
import Loading from "./components/loading";
import { Switch1 } from './navigation/Router';

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
