import { Grid, Row } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import colors from '../assets/colors';
import ViewListNews from './News-List';
import ImageTitle from './Image-title';
import WebView from './WebView';
import { Ionicons } from '@expo/vector-icons';

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
                this.props.navigation.navigate('ListNews', { q: 'Cellphone' })
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
                this.props.navigation.navigate('ListNews', { q: 'Technology' })
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
export default createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: {
        header: null
      }
    },
    ListNews: {
      screen: ViewListNews,
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
  {
    headerMode: 'float',
    navigationOptions: {
      headerBackTitleStyle: {
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
  }
);
