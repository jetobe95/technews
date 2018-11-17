import React,{Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView
} from 'react-native';
import {Title,Header} from 'native-base'
import CategorieListItem from './categorie-Picker-item';
const screen = Dimensions.get('window');
const CategorieListPicker = ({ data }) => (
    <FlatList
      contentContainerStyle={{
        width: screen.width,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      data={data}
      renderItem={({ item }) => <CategorieListItem width={screen.width} {...item} />}
      keyExtractor={item => item.label}
    />
);
export default CategorieListPicker;
