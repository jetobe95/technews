import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonNews from '../elements/Button-news';
import { connect } from 'react-redux';
import { SignIn } from '../redux/actions/actions';

class Perfil extends Component {
  render() {
    const { navigation, News, User:{user,email,name}, SignOut } = this.props;

    return (
      <View style={styles.container}>
        <Text>Bienvenido</Text>
        <Text>{user||name}</Text>
        <Text>{email}</Text>

        <ButtonNews
          title="Cerrar Sesión"
          color="red"
          onPress={() => {
            SignOut();
            navigation.navigate('ToLoginStackNavigator');
          }}
        />
      </View>
    );
  }
}
const MapDispatchToProps = dispatch => {
  return {
    SignOut: ()=>dispatch(SignIn({ user: '', password: '' }))
  };
};
export default connect(
  ({ News, User }) => ({ News, User }),
  MapDispatchToProps
)(Perfil);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
