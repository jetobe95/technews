import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Buscar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Buscar</Text>
            </View>
        );
    }
}
export default Buscar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});