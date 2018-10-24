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
import { connect } from 'react-redux';
import color from '../../../../assets/colors/index';
import ButtonNews from '../../../components/Button/index';
import { SignIn, SignOut } from '../../../services/redux/actions/actions';
import { signin ,list} from '../../../services/firebase';
import style from './styles';

const styles = StyleSheet.create(style);

class SignInC extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
  }
  state = {
    user: 'admin@gmail.com',
    password: '123456',
    loadingRight: false
  };
  static propsTypes = {
    SignIn: func,
    User: object
  };
  componentDidMount() {}
  SignIn = () => {
    const {
      User: { user: userLocal, password: passworLocal },
      SignIn: Sign
    } = this.props;
    const { user, password } = this.state;
    console.log('estado', this.state, 'Props', this.props);
    // if (user === userLocal && password === passworLocal) {
    signin(user, password)
      .then(firebaseUser => {
        console.log('Logged in!', firebaseUser);

        Sign(firebaseUser);
        list('usuarios/'+firebaseUser.user.uid).once('value',snap=>{
          console.log(snap.val())
          if (snap.val().super) {
            
           return this.props.navigation.navigate('ToAppStackNavigatorSuper');
          }
          return this.props.navigation.navigate('ToAppStackNavigator');

        })
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('errorMessage: ' + errorMessage);
        Alert.alert('Usuario Invalido', JSON.stringify(error));
        //ToastAndroid.show('Credenciales incorrectas!', ToastAndroid.SHORT);
      });
    // } else {
    // }
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
                onChangeText={password => this.setState({ password })}
                ref={input => (this.input = input)}
                returnKeyType="go"
                style={[styles.TextInput]}
                placeholder="Contraseña"
                secureTextEntry
              />
            </View>

            <ButtonNews
              onPress={() => this.SignIn()}
              color={color.tercearyDark}
              title="INICIAR"
            />
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
    SignIn: user => dispatch(SignOut({ key: true, user: user.user }))
  };
};
const SignUpWithRedux = connect(
  MapStateToProps,
  MapDispatchToProps
)(SignInC);
export default SignUpWithRedux;
