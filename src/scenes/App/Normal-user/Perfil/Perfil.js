import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Switch, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Container, Header, Content, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { ImagePicker, Permissions } from 'expo';
import {
  SignIn,
  SignOut,
  HandleSelectCustomCategorie
} from '../../../../services/redux/actions/actions';
import color from '../../../../../assets/colors'
import ButtonNews from '../../../../components/Button/index';
// symbol polyfills


class Perfil extends Component {
  state = {
    selectedItems: [],
    ok: false,
    ok2: true,
    ok3: true,
    ok4: true,
    ok5: true,
    ok6: true
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
    return
  }


  render() {
    const { selectedItems } = this.state;
    const {
      navigation,
      News,
      User: { user },
      SignOut,
      HandleSelectCustomCategorie: handle,
      User: { categories }
    } = this.props;
    const uri =
      'http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/blue-user-icon.png'; // obtener link de la imagen de usuario cuando tengamos db

    return (
      <ImageBackground
        style={{ flex: 1 }} source={require('.././././assets/wallpaper.jpg')}>

        <View style={styles.container}>
          <View style={{justifyContent:'center',alignItems:'center'}}>


            <TouchableOpacity style={{
              height: 120, width: 120, backgroundColor: 'white', borderRadius: 60,
              justifyContent: 'center', alignItems: 'center',marginBottom:10
            }}>
              <Image source={{ uri }} style={{ height: 94, width: 94 }} />
            </TouchableOpacity>


          </View>
          <View style={{ alignItems: 'center' }}>

            <Text style={{ color: 'white', fontSize: 27, fontWeight: 'bold' }}>Bienvenido</Text>
            <Text
              style={{ color: 'white', fontSize: 20 }}
            >{user.email}</Text>
          </View>


          <ButtonNews
            textStyle={{ color: color.tercearyDark }}
            title="Cerrar Sesión"
            color="white"
            onPress={() => {
              SignOut();
              navigation.navigate('ToLoginStackNavigator');
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}
function MapDispatchToProps(dispatch) {
  return {
    SignOut: () => dispatch(SignOut({ key: false })),
    HandleSelectCustomCategorie: id => dispatch(HandleSelectCustomCategorie(id))
  };
}
function MapStateToProps({ User }) {
  return {
    User
  };
}
export default connect(
  ({ News, User }) => ({ News, User }),
  MapDispatchToProps
)(Perfil);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
