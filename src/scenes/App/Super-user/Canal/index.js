import { createStackNavigator } from 'react-navigation';
import WebView from '../../../../components/Webview/index';
import NavigationConfig from '../../../../components/Header/index';
import Explorar from './components/Explorar/index';

const Stack = createStackNavigator(
  {
    Explorar: {
      screen: Explorar,
      navigationOptions: {
        title: 'Canal'
      }
    },
    WebView: {
      screen: WebView
    }
  },
  NavigationConfig()
);
export default Stack;
