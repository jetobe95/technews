import {
  Feather,
  Foundation,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { func, object } from "prop-types";
import React, { Component } from "react";
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { connect } from "react-redux";
import color from "../../../../assets/colors/index";
import ButtonNews from "../../../components/Button/index";
import { SignIn, SignOut } from "../../../services/redux/actions/actions";
import { signin, list } from "../../../services/firebase";
import style from "./styles";
import LoadingBook from "../../../components/book-loading";

const styles = StyleSheet.create(style);

class SignInC extends Component {
  state = {
    user: "admin@gmail.com",
    password: "123456",
    loadingRight: false,
    ready:true
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
    this.setState({ready:false})
    const { user, password } = this.state;
    signin(user, password)
    .then(firebaseUser => {
      Sign(firebaseUser);
      list("usuarios/" + firebaseUser.user.uid).once("value", snap => {
        this.setState({ready:true})
        if (snap.val().super) {
            return this.props.navigation.navigate("ToAppStackNavigatorSuper");
          }
          return this.props.navigation.navigate("ToAppStackNavigator");
        });
      })
      .catch(function(error) {
        this.setState({ready:true})
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert("Usuario Invalido", JSON.stringify(error));
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <ImageBackground
          style={styles.container}
          source={require("../images/start.png")}
        >
          <View
            style={{
              height: "30%",
              width: "96%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: color.tercearyDarkRGBA
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: "white",
                marginBottom: 4
              }}
            >
              Iniciar Sesión
            </Text>
            <Text style={{ color: "white" }}>
              Ingrese su usuario y contraseña
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: color.primaryDarkRGBA,
              width: "96%",
              height: "60%"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <MaterialCommunityIcons
                style={{ fontSize: 20 }}
                name="email-outline"
              />
              <TextInput
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
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Foundation style={{ fontSize: 20 }} name="key" />
              <TextInput
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                ref={input => (this.input = input)}
                returnKeyType="go"
                style={[styles.TextInput]}
                placeholder="Contraseña"
                secureTextEntry
              />
            </View>
            {
              this.state.ready?
              <ButtonNews
                onPress={() => this.SignIn()}
                color={color.tercearyDark}
                title="INICIAR"
              />
              : <LoadingBook/>
            }

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
