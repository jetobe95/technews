import Expo, { AppLoading } from 'expo';
import React, { Component } from 'react';
import Loading from './src/scenes/Loading/index';
import { Switch1 } from './src/navigation/Router';
import { Provider } from 'react-redux';
import { store, persistor } from './src/services/redux/store/index';
import { PersistGate } from 'redux-persist/integration/react';
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
      CourierNew: require('./assets/fonts/CourierNew.ttf')
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
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading   />;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistor}>
          <Switch1 />
        </PersistGate>
      </Provider>
    );
  }
}
