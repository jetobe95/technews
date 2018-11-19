import React from 'react';
import {
  ImageBackground as ImgBack,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { Col } from 'native-base';

import { string, func } from 'prop-types';
const { width, height } = Dimensions.get('window');

ImageTitle.propTypes = {
  title: string,
  subtitle: string,
  HandlePress: func
};

function ImageTitle({ title, subtitle, image, HandlePress,color }) {
  return (
    <Col style={styles.col}>
      <TouchableHighlight
        onPress={() => HandlePress()}
        style={{
          margin: 0,
          marginLeft:1,
          height: height * 0.3,
          width: width * 0.5
        }}
      >
        <ImgBack
          source={image}
          style={styles.image}
          imageStyle={{ opacity: 0.9, resizeMode: 'cover' }}
        >
          <View style={styles.ViewImage}>
            <Text style={styles.textImage}>{title}</Text>
            <Text
              style={[
                styles.textImage,
                { color: 'white', fontWeight: 'normal' }
              ]}
            >
              {subtitle}
            </Text>
          </View>
        </ImgBack>
      </TouchableHighlight>
    </Col>
  );
}
export default ImageTitle;
const styles = StyleSheet.create({
  col: {
    height: 170,
    width: 170,
    margin: 2
  },
  textImage: {
    color: 'white',
    fontWeight: 'bold'
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
    borderRadius: 3
  }
});
