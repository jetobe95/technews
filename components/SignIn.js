import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,Dimensions,ImageBackground
} from "react-native";

import color from '../assets/colors'
import { Feather,Foundation } from '@expo/vector-icons';
import { Button } from "react-native-elements";
import { Left } from "native-base";
const {width}=Dimensions.get('window')
const SignUp = (props) => (
    <ImageBackground style={styles.container} source={require('../assets/start.png')}>
        <View style={{alignItems:'center',justifyContent:'center',backgroundColor:color.tercearyDarkRGBA,padding:50,marginHorizontal:4}}>
            <Text style={{fontSize:24,color:'white',marginBottom:4}}>Iniciar Sesión</Text>
            <Text style={{color:'white'}}>Ingrese su usuario y contraseña</Text>
        </View>
        <View 
        style={{justifyContent:'center'
        ,alignItems:'center'
        ,backgroundColor:color.primaryDarkRGBA
        ,width:'96%',height:'60%'}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Feather style={{fontSize:20}} name='user'/>
                <TextInput  style={[styles.TextInput]}  placeholder='Usuario'/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Foundation style={{fontSize:20}} name='key'/>
                <TextInput  style={[styles.TextInput]}  placeholder='Contraseña' secureTextEntry/>
            </View>
            
            <Button 
            backgroundColor={color.tercearyDark}
             borderRadius={6} 
             style={styles.botton}
              title='INICIAR'/>

        </View>
    </ImageBackground>
    )
export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput:{
        width:'80%',
        
        backgroundColor:'white',
        borderRadius:6,
       
        padding: 10,
        marginLeft:6,
        marginVertical:10,
    },
       
    botton:{
        margin:12,
        width:width*0.9
        
    }
});
       
    
    
       