import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import color from '../assets/colors/index';

const Loading = props => (
  <View style={styles.container}>
    <Image
      source={require('../assets/TechNewsLogo.png')}
      style={{ resizeMode: 'contain' }}
    />
    <ActivityIndicator size="large" color={color.primaryDark} />
  </View>
);
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
