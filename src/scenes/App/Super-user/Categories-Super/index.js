import { createStackNavigator } from 'react-navigation';
import colors from '../../../../../assets/colors/index';
import NavigationConfig from '../../../../components/Header/index';
import WebView from '../../../../components/Webview/index';
import CategoriesLIST from './scenes/categories';
import Categories from './scenes/categories/components/Categories'
const StackNavigatorCategories = createStackNavigator(
  {
    Categories: {
      screen: CategoriesLIST,
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
