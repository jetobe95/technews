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
        require('./assets/tab-icons/Uninorte.png'),
        require('./assets/images/android.jpg'),
        require('./assets/images/app.jpg'),
        require('./assets/images/avancestecnológicos.jpg'),
        require('./assets/images/Celulares.jpg'),
        require('./assets/images/ciberseguridad.jpg'),
        require('./assets/images/computacion.jpg'),
        require('./assets/images/deporte.jpg'),
        require('./assets/images/empresas.jpg'),
        require('./assets/images/energia.jpg'),
        require('./assets/images/facebook.jpg'),
        require('./assets/images/google.jpg'),
        require('./assets/images/android.jpg'),
        require('./assets/images/imagenes3d.jpg'),
        require('./assets/images/ingenieria.jpg'),
        require('./assets/images/inteligenciaartificial.jpg'),
        require('./assets/images/internet.jpg'),
        require('./assets/images/ios.jpg'),
        require('./assets/images/machinelearning.jpg'),
        require('./assets/images/medicina.jpg'),
        require('./assets/images/realidadaumentada.jpg'),
        require('./assets/images/realidadvirtual.jpg'),
        require('./assets/images/redes.jpg'),
        require('./assets/images/robotica.jpg'),
        require('./assets/images/tecnologia.jpg'),
        require('./assets/images/television.jpg'),
        require('./assets/images/transporte.jpg'),
        require('./assets/images/uninorte.jpg'),
        require('./assets/images/videojuegos.jpg'),
        require('./assets/images/whatsapp.jpg'),
        require('./assets/images/windows.jpg'),
        require('./assets/images/youtube.jpg'),
      ]);
      
    } catch (error) {
      console.log(error)
    }
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
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
