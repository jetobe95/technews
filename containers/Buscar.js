import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class BuscarContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>BuscarContainer</Text>
            </View>
        );
    }
}
export default BuscarContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});