import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
const screen=Dimensions.get('window')
const BuscarGif = ({mostrarTexto}) => (
  <View style={styles.container}>
   <Image
   style={{
     width:200,
     height:200
   }}
   source={require('../../../assets/loading-book.gif')}/>
   {
     mostrarTexto&&null
   //<Text style={styles.text}>No se encontraron resultados</Text>
   }
  </View>
  )
export default BuscarGif;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  marginTop:screen.height/6
  },
  text:{
    color:'#10CAEF',
    fontSize:14,
    fontWeight:'bold'
  }
});
