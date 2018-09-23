import React from 'react';
import {
  ImageBackground as ImgBack,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {Col}from 'native-base'
const { width, height } = Dimensions.get('window');
const ImageTitle = ({ title, subtitle, image, navigation }) => (
  <Col style={styles.col}>
  <TouchableOpacity style={{flex:1}}>

  <ImgBack
   source={image}
   
    style={styles.image} 
    imageStyle={{ opacity: 0.9 ,resizeMode:'cover'}}>
    <View  style={styles.ViewImage}>
      <Text style={styles.textImage}>{title}</Text>
      <Text style={[styles.textImage, { color: 'white',fontWeight:'normal' }]}>{subtitle}</Text>
    </View>
  </ImgBack>
  </TouchableOpacity>
</Col>
);
export default ImageTitle
const styles = StyleSheet.create({
  col: {
    height: 170,
    width: 170,
    margin: 2,
  },
  textImage: {
    color: 'white',
    fontWeight:'bold'
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
    borderRadius: 3,
  },
});
