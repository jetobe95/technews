import { createStackNavigator } from 'react-navigation';
import colors from '../../../../assets/colors/index';
import News from '../../../components/News/index';
import NavigationConfig from '../../../components/Header/index';
import WebView from '../../../components/Webview/index';
import CategoriesLIST from './components/categories/index';
import Categories from './components/categories/components/Categories'
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
