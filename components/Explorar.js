import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ViewListNews from './News-List';
import Categorias from './Categorias';
import WebView from './WebView';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../assets/colors';
import NavigationConfig from '../navigation/NavigationConfig';

class Explorar extends Component {
  render() {
    return <ViewListNews {...this.props} />;
  }
}
const Stack = {
  Explorar: {
    screen: Explorar,
    navigationOptions: {
      title: 'Explorar',
      headerTitleStyle: {
        color: 'white'
      }
    }
  },
  WebView: {
    screen: WebView
  }
};
const navigationConfig = {
  headerMode: 'float',
  navigationOptions: {
    headerBackTitleStyle: {
      color: 'white'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: colors.primaryDark
    },
    headerBackImage: ({ tintColor, title }) => (
      <Ionicons
        style={{ marginLeft: 10 }}
        name="md-arrow-round-back"
        size={24}
        color="white"
      />
    )
  }
};

export default createStackNavigator(Stack, NavigationConfig());
