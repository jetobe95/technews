import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View,Text } from 'react-native';

const Loading = () => (
  <View style={styles.container}>
    <Image
      source={require('../assets/TechNewsLogo.png')}
      style={{ resizeMode: 'contain' }}
    />
    <Text>TechNews</Text>
    <ActivityIndicator size="large" />
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
