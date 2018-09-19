import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from "react-native";

const Loading = (props) => (
    <View style={styles.container}>
        <ActivityIndicator size='large'/>
        <Text>Cargando....</Text>
    </View>
)
export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});