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
  id: 1,
  title: 'Aplicación',
  subtitle: 'Lo mas reciente',
  q:'Aplicación',
  image:require('./images/Computacion.jpg'),
  visible:true
},
{
  id: 2,
  title: 'Controversia',
  subtitle: 'Lo mas reciente',
  q:'Controversia',
 image:require('./images/Robotica.jpg'),
 visible:true

},
{
  id: 3,
  title: 'Empresas Tecnologicas',
  subtitle: 'Lo mas reciente',
  q:'Empresas Tecnologicas',
 image:require('./images/Redes.jpg'),
 visible:true

},
{
  id: 4,
  title: 'Ingeniería',
  subtitle: 'Lo mas reciente',
  q:'Ingeniería',
  image:require('./images/Avances.jpg'),
  visible:true

},
{
  id: 5,
  title: 'Robotica',
 subtitle: 'Lo mas reciente',
  q:'Robotica',
 image:require('./images/Uninortek.jpg'),
 visible:true

},
{
  id: 6,
  title: 'Tecnología medica',
 subtitle: 'Lo mas reciente',
  q:'Tecnología medica',
 image:require('./images/Computacion.jpg'),
 visible:true

},
{
  id: 7,
  title: 'Tecnología celular',
 subtitle: 'Lo mas reciente',
  q:'Tecnología celular',
 image:require('./images/Robotica.jpg'),
 visible:true

},
{
  id: 8,
  title: 'Samsung',
 subtitle: 'Lo mas reciente',
  q:'Samsung',
 image:require('./images/Redes.jpg'),
 visible:true

},
{
  id: 9,
  title: 'Microbotica',
 subtitle: 'Lo mas reciente',
  q:'Microbotica',
 image:require('./images/Avances.jpg'),
 visible:true

},
{
  id: 10,
  title: 'Obsolecencia programada',
 subtitle: 'Lo mas reciente',
  q:'Obsolecencia programada',
 image:require('./images/Computacion.jpg'),
 visible:true

},
{
  id: 11,
  title: 'Bionica',
  subtitle: 'Lo mas reciente',
  q:'Bionica',
 image:require('./images/Celulares2.jpg'),
 visible:true
},
{
  id: 12,
  title: 'Universidad',
 subtitle: 'Lo mas reciente',
  q:'Universidad',
 image:require('./images/Uninortek.jpg'),
 visible:true

}
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
      data={squares}
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