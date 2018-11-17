import { Entypo, Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
// Tema
import colors from '../../assets/colors/index';

// Usuario normal
import CategoriesNormalUser from '../scenes/App/Normal-user/Categories'
import ExplorarNormalUser from '../scenes/App/Normal-user/Explorar';
import BuscarNormalUser from '../scenes/App/Normal-user/Search/';
import PerfilNormalUser from '../scenes/App/Normal-user/Perfil/Perfil';

// Usuario Super User
import Buscar from '../scenes/App/Super-user/Search';
// import Perfil from '../scenes/App/Super-user/Perfil';
import Canal from '../scenes/App/Super-user/Canal'
import Categorias from '../scenes/App/Super-user/Categories-Super'

// Pantallas de inicio de sesión y Registro
import Start from '../scenes/Auth/index';
import SignIn from '../scenes/Auth/Signin/index';
import SignUp from '../scenes/Auth/Signup/SignUp';



const ToLoginStackNavigator = createStackNavigator(
  {
    Start: { screen: Start, navigationOptions: { header: null } },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: 'Ingreso',
        headerStyle: {
          backgroundColor: colors.primaryLight
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
          backgroundColor: colors.primaryDark
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



// Tab navigator del Usuario normal

const ToAppStackNavigator = createBottomTabNavigator(
  {
    Explorar: {
      screen: ExplorarNormalUser,
      navigationOptions: {
        title: 'Explorar',
        tabBarIcon: ({ tintColor }) => (
          <Entypo size={24} name="list" color={tintColor} />
        )
      }
    },
    Categorias: {
      screen: CategoriesNormalUser,
      navigationOptions: {
        headerTitle: 'Categorias',
        tabBarIcon: ({ tintColor }) => (
          <Feather size={24} name="grid" color={tintColor} />
        )
      }
    },
    Buscar: {
      screen: BuscarNormalUser,
      navigationOptions: {
        title: 'Buscar',
        tabBarIcon: ({ tintColor }) => (
          <Entypo size={24} name="magnifying-glass" color={tintColor} />
        )
      }
    },
    Perfil: {
      screen: PerfilNormalUser,
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
        backgroundColor: 'white',
      },
      inactiveTintColor: '#656565',
      activeTintColor: 'grey'
    }
  }
);



// Tab Navigator Super Usuarios
const ToAppStackNavigatorSuper = createBottomTabNavigator(
  {
    Canal: {
      screen: Canal,
      navigationOptions: {
        title: 'Canal',
        tabBarIcon: ({ tintColor }) => (
          <Feather size={24} name="layers" color={tintColor} />
        )
      }
    },
    Categorias: {
      screen: Categorias,
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
      screen: PerfilNormalUser,
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
        backgroundColor: 'white',
      },
      inactiveTintColor: '#656565',
      activeTintColor: 'grey'
    }
  }
);
export { ToLoginStackNavigator, ToAppStackNavigator,ToAppStackNavigatorSuper };
