import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonNews from '../elements/Button-news';
class Perfil extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Perfil</Text>
        <ButtonNews
          title="Cerrar Sesión"
          color="red"
          onPress={() => navigation.navigate('ToLoginStackNavigator')}
        />
      </View>
    );
  }
}
export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
