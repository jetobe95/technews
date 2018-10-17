import {
  Feather,
  Foundation,
  MaterialCommunityIcons as Mat
} from '@expo/vector-icons';
import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import color from '../../../../assets/colors/index';
import ButtonNews from '../../../components/Button/index';
import { signup, create } from '../../../services/firebase';

import {
  SignOut,
  SignUp as SignUpAction
} from '../../../services/redux/actions/actions';
import style from './styles';
const styles = StyleSheet.create(style);

class SignUp extends React.Component {
  state = {
    password: '',
    email: '',
    user: '',
    loading: false
  };
  SignUp = ({ email, password, user: usuario }) => {
    this.setState({loading:true})
    const {
      navigation: { navigate },
      SignUpAction: SignUp,
      SignOut
    } = this.props;
    signup(email, password)
    
      .then(user => {
        SignUp({ user: user.user });
        
        console.log('Firebase user', user);
        let userInfo = {
          email: user.user.email,
          user: usuario,
          
          marcadores: []
        };
        
        create(`usuarios/${user.user.uid}`)
        .update(userInfo)
        .then(() => {
          Alert.alert('Su usuario ha sido registrado !!');
          this.setState({loading:false})
          navigate('ToAppStackNavigator');
        })
        .catch(() => {
          
          this.setState({loading:false})
          Alert.alert('Error registrando usuario')});
        })
        .catch(error => {
          this.setState({loading:false})
        Alert.alert(`${error}`);
        console.log('Error', error);
      });
  };
  render() {
    const {
      navigation: { navigate },
      SignUpAction: SignUp,
      SignOut
    } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <ImageBackground
          style={styles.container}
          source={require('../images/start.png')}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: color.tercearyDarkRGBA,
              padding: 50,
              marginHorizontal: 4,
              width: '96%'
            }}
          >
            <Text style={{ fontSize: 24, color: 'white', marginBottom: 4 }}>
              Registrate
            </Text>
            <Text style={{ color: 'white' }}>Ingrese sus datos</Text>
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
              <Feather style={{ fontSize: 17 }} name="user" />
              <TextInput
                onChangeText={user => this.setState({ user })}
                onSubmitEditing={() => this.email.focus()}
                returnKeyType="next"
                style={[styles.TextInput]}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Usuario"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Mat style={{ fontSize: 17 }} name="email-outline" />
              <TextInput
                onChangeText={email => this.setState({ email })}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => this.password.focus()}
                ref={email => (this.email = email)}
                style={[styles.TextInput]}
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Email"
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
                returnKeyType="go"
                ref={password => (this.password = password)}
                style={[styles.TextInput]}
                placeholder="Contraseña"
                secureTextEntry
              />
            </View>
            {this.state.loading ? (
              <Image
                style={{ height: 64, width: 64 }}
                source={{
                  uri:
                    'http://www.cronicacampeche.com/wp-content/themes/journal-theme/images/loading.gif'
                }}
              />
            ) : (
              <ButtonNews
                onPress={() => {
                  this.SignUp(this.state);
                  // return;
                  SignOut({ key: true });
                }}
                color={color.tercearyDark}
                title="CREAR"
              />
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const MapStateToProps = state => {
  return {};
};
const MapDispacthToProps = dispatch => {
  return {
    SignUpAction: ({ name, password, user, email }) =>
      dispatch(SignUpAction({ email, user, password, name })),
    SignOut: () => dispatch(SignOut({ key: true }))
  };
};

const SignUpWithRedux = connect(
  MapStateToProps,
  MapDispacthToProps
)(SignUp);
export default SignUpWithRedux;
