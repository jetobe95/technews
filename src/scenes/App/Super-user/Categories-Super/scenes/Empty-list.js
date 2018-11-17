import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class EmptyList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:'white',fontStyle:'italic'}}>No hay Categorias Selecionadas</Text>
            </View>
        );
    }
}
export default EmptyList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});