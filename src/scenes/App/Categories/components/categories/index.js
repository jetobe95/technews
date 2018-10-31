import { Grid, Row } from 'native-base';
import React, { Component,Fragment } from 'react';
import { ScrollView,FlatList,Dimensions ,View,Text,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import _ from 'lodash'

const { width, height } = Dimensions.get('window');

import ImageTitle from './components/Image-title'
import EmptyList from '../Empty-list';
import Modal from '../../components/categories/components/Modal-category'
const squares = [
{
  name: 'Tecnología',
  id: 0,
  children:[
  {
    id: 1,
    name: 'Computacion',
    title: 'Computacion',
    subtitle: 'Lo mas reciente',
    q:'Computer',
   image:require('./images/Computacion.jpg')
  },
  {
    id: 11,
    name: 'Celulares',
    title: 'Celulares',
    subtitle: 'Lo mas reciente',
    q:'smartphone',
   image:require('./images/Celulares2.jpg')
  },
  {
    id: 2,
    name: 'Robotica',
    title: 'Robotica',
    subtitle: 'Lo mas reciente',
    q:'Robotic',
   image:require('./images/Robotica.jpg')

  },
  {
    id: 3,
    name: 'Redes Sociales',
    title: 'Redes Sociales',
    subtitle: 'Lo mas reciente',
    q:'Social networks',
   image:require('./images/Redes.jpg')

  },
  {
    id: 4,
    name: 'Avances',
    title: 'Avances',
    subtitle: 'Lo mas reciente',
    q:'Avances',
   image:require('./images/Avances.jpg')

  },
  {
    id: 5,
    name: 'Universidad',
    title: 'Universidad',
    subtitle: 'Lo mas reciente',
    q:'Universidad',
   image:require('./images/Uninortek.jpg')

  }]
},
];
class Categories extends Component {
  state={
    isOpen:false
  }
  handleOpen=()=>{
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    const { User:{categories} } = this.props
    const data =_.filter(categories,cate=>cate.visible===true)

    return (
      <Fragment>
        <Modal handleOpen={this.handleOpen} isOpen={this.state.isOpen}/>
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
      <TouchableOpacity
      onPress={()=>this.setState({isOpen:true})}
      style={{
        position:'absolute',bottom:0,
        height:50,width:50,backgroundColor:'red',
        borderRadius:25,right:0,justifyContent:'center',alignItems:'center',
        margin:10
    
    }}>
    <Text style={{fontSize:27,color:'#fff',lineHeight:29}}>+</Text>
    </TouchableOpacity>

      </Fragment>
    );
  }
  }
  function MapsStateToProps({User}){
    return {
      User
    }
  }
  
  export default connect(MapsStateToProps)(Categories);