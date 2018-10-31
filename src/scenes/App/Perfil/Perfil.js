import React, { Component,Fragment } from 'react';
import { View, Text, StyleSheet, Switch,FlatList } from 'react-native';
import { Container, Header, Content, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {
  SignIn,
  SignOut,
  HandleSelectCustomCategorie
} from '../../../services/redux/actions/actions';
import ButtonNews from '../../../components/Button/index';
import TitleSwitch from './components/title-switch';
// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');


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
      'https://facebook.github.io/react-native/docs/assets/favicon.png'; // obtener link de la imagen de usuario cuando tengamos db

    return (
      <Fragment>
        {/* <Content style={{ marginTop: 20 }}> */}
          <View style={styles.container}>
            <Thumbnail large source={{ uri: uri }} />
            <Text>Bienvenido</Text>
            <Text>{user.email }</Text>
            <View>

            <SectionedMultiSelect
            styles={{
              container:{'backgroundColor':'red',flex:0}

            }}
            items={categories} 
            uniqueKey='id'
            subKey='children'
            selectText='Seleccione las categorias...'
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            />
            </View>


        

            <ButtonNews
             
              title="Cerrar Sesión"
              color="red"
              onPress={() => {
                SignOut();
                navigation.navigate('ToLoginStackNavigator');
              }}
            />
          </View>
        {/* </Content> */}
      </Fragment>
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
