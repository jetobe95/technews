import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { Item, Left, Right, ListItem, Radio } from 'native-base';
import { Picker } from 'native-base';

const ListItemComponent = ({ width, title,visible,onPress }) => {
  return (
    <TouchableOpacity onPress={()=>onPress()}>
      <ListItem
      onPress={()=>onPress()}
        style={{
          width: '100%',
          justifyContent: 'center',
          paddingRight: 0,
          paddingTop: 0,
          marginLeft: 0,
          paddingBottom: 0
        }}
        selected={visible}
      >
        <Left>
          <Text style={styles.label}>{title}</Text>
        </Left>
        <Right>
          <Radio 
          
          style={{fontSize:30}}
          onPress={()=>onPress()}
          color={'#f0ad4e'} 
          selectedColor="#5cb85c" 
          selected={visible} />
        </Right>
      </ListItem>
    </TouchableOpacity>
  );
};

export default ListItemComponent;

const styles = StyleSheet.create({
  container: {},
  label: {
    color: '#656565',
    fontSize: 20,
    fontFamily: 'Roboto'
  }
});
