import { Grid, Row } from 'native-base';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ImageTitle from './components/Image-title'
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
                image={require('./images/Computacion.jpg')}
              />
              <ImageTitle
                HandlePress={() =>
                  this.props.navigation.navigate('ListNews', { q: 'SmarthPhone' })
                }
                title={'Celulares'}
                subtitle="Lo mas reciente"
                image={require('./images/Celulares2.jpg')}
              />
            </Row>
  
            <Row>
              <ImageTitle
                HandlePress={() =>
                  this.props.navigation.navigate('ListNews', { q: 'Robotic' })
                }
                title={'Robotica'}
                subtitle="Lo mas reciente"
                image={require('./images/Robotica.jpg')}
              />
              <ImageTitle
                HandlePress={() =>
                  this.props.navigation.navigate('ListNews', {
                    q: 'Social Networks'
                  })
                }
                title={'Redes'}
                subtitle="Lo mas reciente"
                image={require('./images/Redes.jpg')}
              />
            </Row>
  
            <Row>
              <ImageTitle
                HandlePress={() =>
                  this.props.navigation.navigate('ListNews', { q: 'Avances' })
                }
                title={'Avances'}
                subtitle="Lo mas reciente"
                image={require('./images/Avances.jpg')}
              />
              <ImageTitle
                HandlePress={() =>
                  this.props.navigation.navigate('ListNews', { q: 'Universidad' })
                }
                title={'Uninorte'}
                subtitle="Lo mas reciente"
                image={require('./images/Uninortek.jpg')}
              />
            </Row>
          </Grid>
        </ScrollView>
      );
    }
  }
  export default Categories;