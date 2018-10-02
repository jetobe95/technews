import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../../assets/colors/index';
function HeaderNavigationConfig () {
  return {
    headerMode: 'float',
    navigationOptions: {
      headerTitleStyle: {
        color: 'white'
      },
      headerBackTitleStyle: {
        color: 'white'
      },
      headerBackTitle: null,

      headerStyle: {
        backgroundColor: colors.primaryDark
      },
      headerBackImage: ({ tintColor, title }) => (
        <Ionicons
          style={{ marginLeft: 10 }}
          name="md-arrow-round-back"
          size={24}
          color="white"
        />
      )
    }
  };
};
export default HeaderNavigationConfig;
