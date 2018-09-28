import {
  Feather,
  Foundation,
  MaterialCommunityIcons as Mat
} from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import color from '../assets/colors/index';
import ButtonNews from '../elements/Button-news';
import { SignUp as SignUpAction } from '../redux/actions/actions';
const { width } = Dimensions.get('screen');
class SignUp extends React.Component {
  state = {
    name: '',
    password: '',
    email: ''
  };
  render() {
    const {
      navigation: { navigate },
      SignUpAction:SignUp
    } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <ImageBackground
          style={styles.container}
          source={require('../assets/start.png')}
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
                onChangeText={name=> this.setState({name})}
                onSubmitEditing={() => this.email.focus()}
                returnKeyType="next"
                style={[styles.TextInput]}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Nombre"
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
                onChangeText={email=> this.setState({email})}

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
                onChangeText={password=> this.setState({password})}

                returnKeyType="go"
                ref={password => (this.password = password)}
                style={[styles.TextInput]}
                placeholder="Contraseña"
                secureTextEntry
              />
            </View>

            <ButtonNews
              onPress={() => {
                SignUp(this.state);
                navigate('ToAppStackNavigator')}}
              color={color.tercearyDark}
              title="CREAR"
            />
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
    SignUpAction:({name,password,email})=>dispatch(SignUpAction({email,password,name}))
  };
};

const SignUpWithRedux = connect(
  MapStateToProps,
  MapDispacthToProps
)(SignUp);
export default SignUpWithRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width
  },
  TextInput: {
    width: '80%',

    backgroundColor: 'white',
    borderRadius: 6,

    padding: 10,
    marginLeft: 6,
    marginVertical: 10
  },

  botton: {
    margin: 5,
    width: width * 0.9
  }
});
