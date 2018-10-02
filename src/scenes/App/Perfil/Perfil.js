import React, { Component } from 'react';
import { View, Text, StyleSheet,Switch } from 'react-native';
import ButtonNews from '../../../components/Button/index';
import { connect } from 'react-redux';
import { SignIn, SignOut } from '../../../services/redux/actions/actions';

import { Container, Header, Content, Thumbnail } from 'native-base';

class Perfil extends Component {
  state={
    ok:false,
    ok2:true,
    ok3:true,
    ok4:true,
    ok5:true,
    ok6:true,
  }
  render() {
    const { ok,ok2,ok3,ok4,ok5,ok6 } = this.state
    const { navigation, News, User:{user,email,name}, SignOut } = this.props;
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";// obtener link de la imagen de usuario cuando tengamos db

    return (
      <Container>
        <Header />
        <Content style={{marginTop: 20}}>
          <View style={styles.container}>
            <Thumbnail large source={{uri: uri}}  />
            <Text>Bienvenido</Text>
            <Text>{user||name}</Text>
            <Text>{email}</Text>
            <View style={{flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
              <View style={{flexDirection:'row'}}>
                <Text>Computación</Text>
                <Switch  value={ok} onValueChange={()=>this.setState({ok:!ok})}/>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text>Celulares        </Text>
                <Switch value={ok2} onValueChange={()=>this.setState({ok2:!ok2})}/>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text>Robotica         </Text>
                <Switch value={ok3} onValueChange={()=>this.setState({ok3:!ok3})}/>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text>Redes              </Text>
                <Switch value={ok4} onValueChange={()=>this.setState({ok4:!ok4})}/>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text>Avance            </Text>
                <Switch value={ok5} onValueChange={()=>this.setState({ok5:!ok5})}/>
              </View>
                <View style={{flexDirection:'row'}}>
                <Text>Uninorte         </Text>
                <Switch value={ok6} onValueChange={()=>this.setState({ok6:!ok6})}/>
              </View>
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
        </Content>
      </Container>
      
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
