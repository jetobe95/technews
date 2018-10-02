import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch,FlatList } from 'react-native';
import { Container, Header, Content, Thumbnail } from 'native-base';
import { connect } from 'react-redux';


import {
  SignIn,
  SignOut,
  HandleSelectCustomCategorie
} from '../../../services/redux/actions/actions';
import ButtonNews from '../../../components/Button/index';
import TitleSwitch from './components/title-switch';


class Perfil extends Component {
  state = {
    ok: false,
    ok2: true,
    ok3: true,
    ok4: true,
    ok5: true,
    ok6: true
  };
  render() {
    const { ok, ok2, ok3, ok4, ok5, ok6 } = this.state;
    const {
      navigation,
      News,
      User: { user, email, name },
      SignOut,
      HandleSelectCustomCategorie: handle,
      User: { categories }
    } = this.props;
    const uri =
      'https://facebook.github.io/react-native/docs/assets/favicon.png'; // obtener link de la imagen de usuario cuando tengamos db

    return (
      <Container>
        <Header />
        <Content style={{ marginTop: 20 }}>
          <View style={styles.container}>
            <Thumbnail large source={{ uri: uri }} />
            <Text>Bienvenido</Text>
            <Text>{user || name}</Text>
            <Text>{email}</Text>

            <FlatList
              data={categories}
              keyExtractor={item=>item.id.toString()}
              renderItem={({item})=>
              <TitleSwitch 
              {...item} 
              onValueChange={()=>handle(item.id)}
              />
              }
            />


        

            <ButtonNews
             
              title="Cerrar Sesión"
              color="red"
              onPress={() => {
                SignOut();
                navigation.navigate('ToLoginStackNavigator');
              }}
            />
          </View>
        </Content>
      </Container>
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
    justifyContent: 'center'
  }
});
