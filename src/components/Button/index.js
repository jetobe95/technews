import { any, bool, func, string } from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as Btn } from 'react-native-elements';
import style from './styles';

const styles = StyleSheet.create(style);

Button.propTypes = {
  title: string,
  onPress: func,
  color: string,
  disabled: bool,
  loadingRight: any
};

function Button({ title, onPress, color, disabled, loadingRight,iconComponent ,textStyle}) {
  return (
    <Btn
      iconComponent={iconComponent}
      loadingRight={loadingRight}
      disabled={disabled}
      textStyle={[{ paddingBottom: '1%' },textStyle]}
      fontSize={20}
      onPress={onPress}
      backgroundColor={color}
      borderRadius={6}
      style={styles.botton}
      buttonStyle={styles.botton}
      title={title}
    />
  );
}
export default Button;
