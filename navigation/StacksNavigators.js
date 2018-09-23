import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import colors from '../assets/colors';
import Buscar from '../components/Buscar';
import Categories from '../components/Categorias';
import Explorar from '../components/Explorar';
import Perfil from '../components/Perfil';
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Start from "../components/Start";



const ToLoginStackNavigator=createStackNavigator({
    Start:{screen:Start,navigationOptions:{header:null}},
    SignIn:{screen:SignIn,navigationOptions:{title:'Sign In',
    headerStyle:{
        backgroundColor:colors.primaryDark,
      },
      headerTitleStyle:{
        color:'white',
      }
    }},
    SignUp:{screen:SignUp,navigationOptions:{title:'Sign Up',
    headerTitleStyle:{
        color:'white',
      },
    headerStyle:{
        backgroundColor:colors.primaryDark,
      }}}
},{initialRouteName:'Start',mode:'card',headerMode:'screen'})
const ToAppStackNavigator=createBottomTabNavigator({
    Categorias:{
            screen:Categories,navigationOptions:{
                headerTitle :'Categorias',
                tabBarIcon:({tintColor})=>(<Feather size={24} name='grid' color={tintColor} />)
                
            }
    },
    Explorar:{
            screen:Explorar,navigationOptions:{
                title:'Explorar',
                tabBarIcon:({tintColor})=>(<Entypo size={24} name='list' color={tintColor} />)

            }
    },
    Buscar:{
            screen:Buscar,navigationOptions:{
                title:'Buscar',
                tabBarIcon:({tintColor})=>(<Entypo size={24} name='magnifying-glass' color={tintColor} />)

            }
    },
    Perfil:{
            screen:Perfil,navigationOptions:{
                title:'Perfil',
                tabBarIcon:({tintColor})=>(<Feather size={24} name='user' color={tintColor} />)

            }
    },
},{
    tabBarOptions:{
        showIcon:true,
        tabStyle :{
            backgroundColor:colors.terceary
        },
        inactiveTintColor :'#acb0a9',
        activeTintColor:'white'
    }
})
export { ToLoginStackNavigator, ToAppStackNavigator };

