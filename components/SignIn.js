import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar, 
    TextInput, 
    Dimensions, 
    ImageBackground, 
    KeyboardAvoidingView,
    Platform

} from "react-native";

import color from '../assets/colors'
import { Feather, Foundation } from '@expo/vector-icons';
import { Button } from "react-native-elements";
import { Left } from "native-base";
import ButtonNews from "../elements/Button-news";
const { width } = Dimensions.get('screen')
const SignUp = (props) => (
    <KeyboardAvoidingView behavior='position' 
    style={styles.container}
    
    >

        <ImageBackground style={styles.container}  
        
        source={require('../assets/start.png')}>
            <View style={{
                height:'30%',
               width:'96%',
            alignItems: 'center',
             justifyContent: 'center', 
             backgroundColor: color.tercearyDarkRGBA,
               }}>
                <Text style={{ fontSize: 24, color: 'white', marginBottom: 4
                 }}>Iniciar Sesión</Text>
                <Text style={{ color: 'white' }}>Ingrese su usuario y contraseña</Text>
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
                        style={{ fontSize: 20 }} name='user' />
                    <TextInput
                        autoCapitalize='none'
                        onSubmitEditing={() => this.input.focus()}
                        style={[styles.TextInput]}
                        returnKeyType='next'
                        placeholder='Usuario' />
                </View>
                <View
                    style={{ flexDirection: 'row',
                     justifyContent: 'center', 
                     alignItems: 'center' }}>
                    <Foundation
                        style={{ fontSize: 20 }}
                        name='key' />
                    <TextInput
                        ref={input => this.input = input}
                        returnKeyType='go'
                        style={[styles.TextInput]}
                        placeholder='Contraseña'
                        secureTextEntry />
                </View>

                <ButtonNews
                   
                    onPress={()=>props.navigation.navigate('ToAppStackNavigator')}

                    color={color.tercearyDark}
                    
                    title='INICIAR' />

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
        margin: 12,
        width: width * 0.9

    }
});



