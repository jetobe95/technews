import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Explorar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Explorar</Text>
            </View>
        );
    }
}
export default Explorar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});