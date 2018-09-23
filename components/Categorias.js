import { Grid, Row } from 'native-base';
import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation'
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import ImageTitle from './Image-title';
import colors from '../assets/colors';

const { width, height } = Dimensions.get('window');
 class Categories extends Component {
  
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'black' }}>
        <Grid>
          <Row>
            
              <ImageTitle
              title={'Computacion'}
              subtitle='Lo mas reciente'
                image={require('../assets/tab-icons/Computacion.jpg')}
               
              />
              <ImageTitle
              title={'Celulares'}
              subtitle='Lo mas reciente'
              image={require('../assets/tab-icons/Celulares2.jpg')}
                
               
              />
           
          </Row>

          <Row>
            <ImageTitle
              title={'Robotica'}
              subtitle='Lo mas reciente'
              image={require('../assets/tab-icons/Robotica.jpg')}

               
              />
            <ImageTitle
              title={'Redes'}
              subtitle='Lo mas reciente'
              image={require('../assets/tab-icons/Redes.jpg')}
                
               
              />
          </Row>

          <Row>
             <ImageTitle
              title={'Avances'}
              subtitle='Lo mas reciente'
              image={require('../assets/tab-icons/Avances.jpg')}

               
              />
             <ImageTitle
              title={'Uninorte'}
              subtitle='Lo mas reciente'
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
    margin: 2,
  },
  textImage: {
    color: 'white',
  },
  ViewImage: {
    flex: 1,

    position: 'absolute',
    top: height * 0.2,
    marginLeft: 2,
  },
  image: {
    height: 200,
    width: null,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 3,
  },
});
export default createStackNavigator({
  Categories:{
    screen:Categories,navigationOptions:{
      title:'Categorias',
      headerStyle:{
        backgroundColor:colors.primaryDark,
      },
      headerTitleStyle:{
        color:'white',
      }
    }
  }
},{
headerMode:'float'
})