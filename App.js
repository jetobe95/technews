import Expo, { AppLoading } from 'expo';
import React, { Component } from 'react';
import {View,Text,SafeAreaView} from 'react-native'
import { Switch1 } from './src/navigation/Router';
import { Provider } from 'react-redux';
import { store } from './src/services/redux/store/index';

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
    console.disableYellowBox = true;
  }
  
  async componentDidMount() {
    try {
      await Expo.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
        Entypo: require('@expo/vector-icons/fonts/Entypo.ttf'),
        Feather: require('@expo/vector-icons/fonts/Feather.ttf'),
        CourierNew: require('./assets/fonts/CourierNew.ttf'),
        MaterialIcons: require('native-base/Fonts/MaterialIcons.ttf')
      });
      await Expo.Asset.loadAsync([
        require('./assets/start.png'),
        require('./assets/logo.png'),
        require('./assets/TechNewsLogo.png'),
        require('./assets/tab-icons/Avances.jpg'),
        require('./assets/tab-icons/Celulares2.jpg'),
        require('./assets/tab-icons/Computacion.jpg'),
        require('./assets/tab-icons/Redes.jpg'),
        require('./assets/tab-icons/Robotica.jpg'),
        require('./assets/tab-icons/Uninortek.jpg'),
        require('./assets/tab-icons/Uninorte.png')
      ]);
      
    } catch (error) {
      console.log(error)
    }
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      // return <AppLoading   />;
      return(
        <SafeAreaView style={{flex:1}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>
                Cargado...
            </Text>
          </View>
        </SafeAreaView>
      )
    }
    return (
      <Provider store={store}>
          <Switch1 />
      </Provider>
    );
  }
}
