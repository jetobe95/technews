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
const CategorieListPicker = ({ data,toggleVisible }) => (
    <FlatList
      contentContainerStyle={{
        width: '150%',
        alignItems: 'stretch',
        justifyContent: 'center'
      }}
      data={data}
      renderItem={({ item }) => {
      return <CategorieListItem 
      onPress={()=>toggleVisible(item.id)} 
      width={screen.width} 
      {...item} 
      />}

      }
      keyExtractor={item => item.id}
    />
);
export default CategorieListPicker;
