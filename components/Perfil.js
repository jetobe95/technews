import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Perfil extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Perfil</Text>
            </View>
        );
    }
}
export default Perfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});