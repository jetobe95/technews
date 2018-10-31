import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import CategorieListItem from './categorie-Picker-item';
const CategorieListPicker = ({data}) => (
    <FlatList
    contentContainerStyle={{width:220}}
        data={data}
        renderItem={({item})=><CategorieListItem {...item}/>}
        keyExtractor={item=>item.label}
    />
    )
export default CategorieListPicker;

const styles = StyleSheet.create({
    container: {
        height:100,
        width:100,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
});