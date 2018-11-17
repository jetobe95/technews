import React from 'react';
import { View, Switch, Text } from 'react-native';
function TitleSwitch({ title, visible, onValueChange }) {
  return (
    <View style={{ flexDirection: 'row' ,justifyContent:'space-between',marginTop:3,marginBottom:4}}>
      <Text>{title}</Text>
      <Switch value={visible} onValueChange={() => onValueChange()} />
    </View>
  );
}
export default TitleSwitch;
