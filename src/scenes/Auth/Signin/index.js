import {
  Feather,
  Foundation,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { func, object } from 'prop-types';
import React, { Component } from 'react';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import _ from 'lodash'
import {generarCategoria} from '../../../services/datoscategorias'
import { connect } from 'react-redux';
import color from '../../../../assets/colors/index';
import ButtonNews from '../../../components/Button/index';
import { SignIn, SignOut, cargarCategorias} from '../../../services/redux/actions/actions';
import { signin, list } from '../../../services/firebase';
import style from './styles';
import LoadingBook from '../../../components/book-loading';

const styles = StyleSheet.create(style);

class SignInC extends Component {
  state = {
    user: 'alto.951@hotmail.com',
    password: 'Colombia2010',
    loadingRight: false,
    ready: true
  };
  static propsTypes = {
    SignIn: func,
    User: object
  };
  componentDidMount() {}
  SignIn = () => {
    const {
      User: { user: userLocal, password: passworLocal },
      SignIn: Sign,
      CargarCategorias
    } = this.props;
    this.setState({ ready: false });
    const { user, password } = this.state;
    signin(user, password)
      .then(firebaseUser => {
        Sign(firebaseUser);
        list('usuarios/' + firebaseUser.user.uid).once('value', snap => {
          const {categorias}=snap.val()
          let nuevaCategoria=_.map(categorias,item=>({...generarCategoria(item.id),visible:item.visible}))
          this.setState({ ready: true });
          if (snap.val().super) {
            CargarCategorias(nuevaCategoria)
            return this.props.navigation.navigate('ToAppStackNavigatorSuper');
          }
            CargarCategorias(nuevaCategoria)
          return this.props.navigation.navigate('ToAppStackNavigator');
        });
      })
      .catch(function(error) {
        this.setState({ ready: true });
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert('Usuario Invalido', JSON.stringify(error));
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <ImageBackground
          style={styles.container}
          source={require('../images/start.png')}
        >
          <View
            style={{
              height: '30%',
              width: '96%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: color.tercearyDarkRGBA
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                marginBottom: 4
              }}
            >
              Iniciar Sesión
            </Text>
            <Text style={{ color: 'white' }}>
              Ingrese su usuario y contraseña
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: color.primaryDarkRGBA,
              width: '96%',
              height: '60%'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <MaterialCommunityIcons
                style={{ fontSize: 20 }}
                name="email-outline"
              />
              <TextInput
                underlineColorAndroid="#fff"
                value={this.state.user}
                keyboardType="email-address"
                onChangeText={user => this.setState({ user })}
                autoCapitalize="none"
                onSubmitEditing={() => this.input.focus()}
                style={[styles.TextInput]}
                returnKeyType="next"
                placeholder="Correo"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Foundation style={{ fontSize: 20 }} name="key" />
              <TextInput
                underlineColorAndroid="#fff"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                ref={input => (this.input = input)}
                returnKeyType="go"
                style={[styles.TextInput]}
                placeholder="Contraseña"
                secureTextEntry
              />
            </View>
            {this.state.ready ? (
              <ButtonNews
                onPress={() => this.SignIn()}
                color={color.tercearyDark}
                title="INICIAR"
              />
            ) : (
              <LoadingBook />
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const MapStateToProps = ({ User }) => {
  return {
    User
  };
};
const MapDispatchToProps = dispatch => {
  return {
    SignIn: user => dispatch(SignOut({ key: true, user: user.user })),
    CargarCategorias:categorias=>dispatch(cargarCategorias(categorias))
  };
};
const SignUpWithRedux = connect(
  MapStateToProps,
  MapDispatchToProps
)(SignInC);
export default SignUpWithRedux;
