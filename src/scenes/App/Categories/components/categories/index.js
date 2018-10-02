import { Grid, Row } from 'native-base';
import React, { Component } from 'react';
import { ScrollView,FlatList,Dimensions } from 'react-native';
import { connect } from 'react-redux'
import _ from 'lodash'

const { width, height } = Dimensions.get('window');

import ImageTitle from './components/Image-title'
import EmptyList from '../Empty-list';
const squares = [
  {
    id: 1,
    title: 'Computacion',
    subtitle: 'Lo mas reciente',
    q:'Computer',
   image:require('./images/Computacion.jpg')
  },
  {
    id: 11,
    title: 'Celulares',
    subtitle: 'Lo mas reciente',
    q:'smartphone',
   image:require('./images/Celulares2.jpg')
  },
  {
    id: 2,
    title: 'Robotica',
    subtitle: 'Lo mas reciente',
    q:'Robotic',
   image:require('./images/Robotica.jpg')

  },
  {
    id: 3,
    title: 'Redes Sociales',
    subtitle: 'Lo mas reciente',
    q:'Social networks',
   image:require('./images/Redes.jpg')

  },
  {
    id: 4,
    title: 'Avances',
    subtitle: 'Lo mas reciente',
    q:'Avances',
   image:require('./images/Avances.jpg')

  },
  {
    id: 5,
    title: 'Universidad',
    subtitle: 'Lo mas reciente',
    q:'Universidad',
   image:require('./images/Uninortek.jpg')

  }
];
class Categories extends Component {
  render() {
    const { User:{categories} } = this.props
    const data =_.filter(categories,cate=>cate.visible===true)

    return (
      <FlatList
      ListEmptyComponent={()=><EmptyList/>}
        style={{ flex: 1,height,backgroundColor:'#252525' }}
        numColumns={2}
        contentContainerStyle={{ marginRight:1,flexDirection: 'column' }}
        columnWrapperStyle={{ flex: 1 }}
        data={data||squares}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ImageTitle 
        HandlePress={() =>
                this.props.navigation.navigate('ListNews', 
                { q: item.q})
              }
        {...item} />}
      />
    );
  }
  }
  function MapsStateToProps({User}){
    return {
      User
    }
  }
  
  export default connect(MapsStateToProps)(Categories);