import { createStackNavigator } from 'react-navigation';
import colors from '../../../../../assets/colors/index';
import NavigationConfig from '../../../../components/Header/index';
import WebView from '../../../../components/Webview/index';
import ListaDeCategorias from './components/categories/index';
import Categories from './components/categories/components/Categories'
const StackNavigatorCategories = createStackNavigator(
  {
    Categories: {
      screen: ListaDeCategorias,
      navigationOptions: {
        title: 'Categoria'
      }
    },
    ListNews: {
      screen: Categories,
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          color: 'white'
        }
      }
    },
    WebView: {
      screen: WebView
    }
  },
  NavigationConfig()
);
export default StackNavigatorCategories;
