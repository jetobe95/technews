import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import { Item, Left, Right, ListItem, Radio } from 'native-base';
import { Picker } from 'native-base';

const ListItemComponent = ({ width, label }) => {
  return (
    <ListItem
      selected={true}
      style={{
        width: width * 0.8,
        justifyContent: 'center',
        paddingRight: 0,
        paddingTop: 0,
        marginLeft: 0,
        paddingBottom: 0,
      }}
    >
      <Left>
        <Text style={styles.label}>{label}</Text>
      </Left>
      <Right>
        <Radio color={'#f0ad4e'} selectedColor="#5cb85c" selected={true} />
      </Right>
    </ListItem>
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
