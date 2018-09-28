import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import colors from '../assets/colors';
import Buscar from '../components/Buscar';
import Categories from '../components/Categorias';
import Explorar from '../containers/Explorar';
import Perfil from '../components/Perfil';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Start from '../components/Start';
import Ionicons from '@expo/vector-icons/Ionicons';

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
      inactiveTintColor: '#acb0a9',
      activeTintColor: 'white'
    }
  }
);
export { ToLoginStackNavigator, ToAppStackNavigator };
