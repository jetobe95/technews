import { createSwitchNavigator } from 'react-navigation';
import { ToLoginStackNavigator, ToAppStackNavigator } from './StacksNavigators';
import colors from '../assets/colors';
const Switch1 = createSwitchNavigator(
  {
    ToLoginStackNavigator: {
      screen: ToLoginStackNavigator
    },
    ToAppStackNavigator: {
      screen: ToAppStackNavigator
    }
  },
  {
    initialRouteName: 'ToLoginStackNavigator'
  }
);

export { Switch1 };
