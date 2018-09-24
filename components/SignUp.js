import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
     Dimensions, 
     ImageBackground, 
     KeyboardAvoidingView,
     StatusBar
} from "react-native";

import color from '../assets/colors/index'
import { Feather, Foundation, MaterialCommunityIcons as Mat } from '@expo/vector-icons';
import { Button } from "react-native-elements";
import { Left } from "native-base";
const { width } = Dimensions.get('screen')
const SignUp = (props) => (
    <KeyboardAvoidingView style={styles.container} behavior='position'>

        <ImageBackground style={styles.container} source={require('../assets/start.png')}>

            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: color.tercearyDarkRGBA,
                padding: 50,
                 marginHorizontal: 4, 
                 width: '96%'
            }}>
                <Text style={{ fontSize: 24, color: 'white', marginBottom: 4 }}>Registrate</Text>
                <Text style={{ color: 'white' }}>Ingrese sus datos</Text>
            </View>
            <View
                style={{
                    justifyContent: 'center'
                    , alignItems: 'center'
                    , backgroundColor: color.primaryDarkRGBA
                    , width: '96%', height: '60%'
                }}>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Feather
                        style={{ fontSize: 17 }}
                        name='user' />
                    <TextInput
                        onSubmitEditing={() => this.email.focus()}
                        returnKeyType='next'
                        style={[styles.TextInput]}
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder='Nombre' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Mat
                        style={{ fontSize: 17 }}
                        name='email-outline' />
                    <TextInput
                        autoCapitalize='none'
                        returnKeyType='next'
                        onSubmitEditing={() => this.password.focus()}
                        ref={email => this.email = email}
                        style={[styles.TextInput]}
                        autoCorrect={false}
                        keyboardType='email-address'
                        placeholder='Email' />
                </View>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Foundation
                        style={{ fontSize: 20 }}
                        name='key' />
                    <TextInput
                        returnKeyType='go'
                        ref={password => this.password = password}
                        style={[styles.TextInput]}
                        placeholder='Contraseña'
                        secureTextEntry />
                </View>

                <Button
                    fontSize={20}
                    onPress={()=>props.navigation.navigate('ToAppStackNavigator')}
                    
                    backgroundColor={color.tercearyDark}
                    borderRadius={6}
                    style={styles.botton}
                    buttonStyle={styles.botton}
                    title='CREAR' />

            </View>
        </ImageBackground>
    </KeyboardAvoidingView>

)
export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width
    },
    TextInput: {
        width: '80%',

        backgroundColor: 'white',
        borderRadius: 6,

        padding: 10,
        marginLeft: 6,
        marginVertical: 10,
    },

    botton: {
        margin: 5,
        width: width * 0.9

    }
});



