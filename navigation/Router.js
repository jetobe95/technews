import { createSwitchNavigator } from 'react-navigation';
import { ToLoginStackNavigator, ToAppStackNavigator } from './StacksNavigators';
import colors from '../assets/colors';
import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/loading';
class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
  }

  _bootstrapAsync = () => {
    const { User: {user,email,key} } = this.props;
    console.log('props', this.props,{user});

    this.props.navigation.navigate(
      key ? 'ToAppStackNavigator' : 'ToLoginStackNavigator'
    );
  };
  componentDidMount() {
    console.log('props', this.props);
    this._bootstrapAsync()
    // setTimeout(() => , 200x0);
  }
  render() {
    return <Loading />;
  }
}
const AuthLoadingWithRedux = connect(({ User }) => ({ User }))(
  AuthLoadingScreen
);
const Switch1 = createSwitchNavigator(
  {
    ToLoginStackNavigator: {
      screen: ToLoginStackNavigator
    },
    ToAppStackNavigator: {
      screen: ToAppStackNavigator
    },
    AuthLoading: {
      screen: AuthLoadingWithRedux
    }
  },
  {
    initialRouteName: 'AuthLoading'
  }
);
const Switch1WithRedux = connect(({ User }) => ({ User }))(Switch1);

export { Switch1WithRedux as Switch1 };
