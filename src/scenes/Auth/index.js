import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  StatusBar,
  Platform
} from 'react-native';
import {object} from 'prop-types';

import colors from '../../../assets/colors/index';
import ButtonNews from '../../components/Button/index';
const { width, height } = Dimensions.get('window');

Start.propTypes={
navigation:object
}
function Start(props){
  return (
    <ImageBackground
      imageStyle={{ opacity: 0.9 }}
      source={require('./images/start.png')}
      style={styles.container}
    >
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('./images/TechNewsLogo.png')}
          style={{ resizeMode: 'contain', height: 100, width: 100 }}
        />
        <Text
          style={{
            margin: 5,
            fontSize: 28,
            fontFamily: 'CourierNew',
            color: 'white'
          }}
        >
          TechNews
        </Text>
        <Text style={{ fontSize: 12, color: 'white' }}>
          Improving your way to see news
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width,
          height: height * 0.3
        }}
      >
        <ButtonNews
          title="Ingresar"
          onPress={() => props.navigation.navigate('SignIn')}
          color={colors.primary}
        />
        <ButtonNews
          onPress={() => props.navigation.navigate('SignUp')}
          title="Crear Cuenta"
          style={styles.Boton}
          color={colors.secundary}
        />
      </View>
    </ImageBackground>
  );
};
export default Start;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  Boton: {
    margin: 5,
    width: width * 0.9,
    marginVertical: 10
  }
});
