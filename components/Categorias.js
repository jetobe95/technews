import { Grid, Row } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import colors from '../assets/colors';
import CategoriesContainer from '../containers/Categorias';
import NavigationConfig from '../navigation/NavigationConfig';
import ImageTitle from './Image-title';
import WebView from './WebView';

const { width, height } = Dimensions.get('window');

class Categories extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'black' }}>
        <Grid>
          <Row>
            <ImageTitle
              HandlePress={() =>
                this.props.navigation.navigate('ListNews', { q: 'Computer' })
              }
              title={'Computacion'}
              subtitle="Lo mas reciente"
              image={require('../assets/tab-icons/Computacion.jpg')}
            />
            <ImageTitle
              HandlePress={() =>
                this.props.navigation.navigate('ListNews', { q: 'SmarthPhone' })
              }
              title={'Celulares'}
              subtitle="Lo mas reciente"
              image={require('../assets/tab-icons/Celulares2.jpg')}
            />
          </Row>

          <Row>
            <ImageTitle
              HandlePress={() =>
                this.props.navigation.navigate('ListNews', { q: 'Robotic' })
              }
              title={'Robotica'}
              subtitle="Lo mas reciente"
              image={require('../assets/tab-icons/Robotica.jpg')}
            />
            <ImageTitle
              HandlePress={() =>
                this.props.navigation.navigate('ListNews', {
                  q: 'Social Networks'
                })
              }
              title={'Redes'}
              subtitle="Lo mas reciente"
              image={require('../assets/tab-icons/Redes.jpg')}
            />
          </Row>

          <Row>
            <ImageTitle
              HandlePress={() =>
                this.props.navigation.navigate('ListNews', { q: 'Avances' })
              }
              title={'Avances'}
              subtitle="Lo mas reciente"
              image={require('../assets/tab-icons/Avances.jpg')}
            />
            <ImageTitle
              HandlePress={() =>
                this.props.navigation.navigate('ListNews', { q: 'Universidad' })
              }
              title={'Uninorte'}
              subtitle="Lo mas reciente"
              image={require('../assets/tab-icons/Uninortek.jpg')}
            />
          </Row>
        </Grid>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  col: {
    height: 170,
    width: 170,
    margin: 2
  },
  textImage: {
    color: 'white'
  },
  ViewImage: {
    flex: 1,

    position: 'absolute',
    top: height * 0.2,
    marginLeft: 2
  },
  image: {
    height: 200,
    width: null,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 3
  }
});

const StackNavigatorCategories = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        header: null
      }
    },
    ListNews: {
      screen: CategoriesContainer,
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
