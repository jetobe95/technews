import { Entypo, Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


import colors from '../../assets/colors/index';
import Buscar from '../scenes/App/Search/index';
import Categories from '../scenes/App/Categories/index';
import Perfil from '../scenes/App/Perfil/Perfil';
import SignIn from '../scenes/Auth/Signin/index';
import SignUp from '../scenes/Auth/Signup/SignUp';
import Start from '../scenes/Auth/index';
import Explorar from '../scenes/App/Explorar/index';

const ToLoginStackNavigator = createStackNavigator(
  {
    Start: { screen: Start, navigationOptions: { header: null } },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Ingreso',
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          color: 'white'
        }
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Registro',
        headerTitleStyle: {
          color: 'white'
        },
        headerStyle: {
          backgroundColor: colors.primary
        }
      }
    }
  },
  {
    initialRouteName: 'Start',
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: {
      headerBackImage: ({ tintColor, title }) => (
        <Ionicons
          name="md-arrow-round-back"
          style={{ marginHorizontal: 4 }}
          size={24}
          color="white"
        />
      )
    }
  }
);
const ToAppStackNavigator = createBottomTabNavigator(
  {
    Explorar: {
      screen: Explorar,
      navigationOptions: {
        title: 'Explorar',
        tabBarIcon: ({ tintColor }) => (
          <Entypo size={24} name="list" color={tintColor} />
        )
      }
    },
    Categorias: {
      screen: Categories,
      navigationOptions: {
        headerTitle: 'Categorias',
        tabBarIcon: ({ tintColor }) => (
          <Feather size={24} name="grid" color={tintColor} />
        )
      }
    },
    Buscar: {
      screen: Buscar,
      navigationOptions: {
        title: 'Buscar',
        tabBarIcon: ({ tintColor }) => (
          <Entypo size={24} name="magnifying-glass" color={tintColor} />
        )
      }
    },
    Perfil: {
      screen: Perfil,
      navigationOptions: {
        title: 'Perfil',
        tabBarIcon: ({ tintColor }) => (
          <Feather size={24} name="user" color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      tabStyle: {
        backgroundColor: colors.terceary
      },
      inactiveTintColor: '#757575',
      activeTintColor: 'white'
    }
  }
);
export { ToLoginStackNavigator, ToAppStackNavigator };
