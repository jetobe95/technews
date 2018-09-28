import React, { Component } from 'react';
import { View, Text, StyleSheet,Switch } from 'react-native';
import ButtonNews from '../elements/Button-news';
import { connect } from 'react-redux';
import { SignIn, SignOut } from '../redux/actions/actions';

class Perfil extends Component {
  state={
    ok:false,
    ok2:true,
  }
  render() {
    const { ok,ok2 } = this.state
    const { navigation, News, User:{user,email,name}, SignOut } = this.props;

    return (
      <View style={styles.container}>
        <Text>Bienvenido</Text>
        <Text>{user||name}</Text>
        <Text>{email}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Switch  value={ok} onValueChange={()=>this.setState({ok:!ok})}/>
        <Switch value={ok2} onValueChange={()=>this.setState({ok2:!ok2})}/>

        </View>

        <ButtonNews
          disabled={!(ok&&ok2)}
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
    SignOut: ()=>dispatch(SignOut({key:false}))
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
