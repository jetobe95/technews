import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View, Text } from 'react-native';

import style from './styles';

const styles = StyleSheet.create(style);

function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/TechNewsLogo.png')}
        style={{ resizeMode: 'contain' }}
      />
      <Text>TechNews</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}
export default Loading;
