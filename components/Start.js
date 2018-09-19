import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,Image
} from "react-native";
import { Button } from "react-native-elements";
import colors from "../assets/colors/index"
const Start = (props) => (
    <ImageBackground 
    imageStyle={{opacity:0.9}}
    source={require('../assets/start.png')}
    style={styles.container}>
       <View style={{alignItems:"center"}}>
            <Image source={require('../assets/TechNewsLogo.png')}  style={{resizeMode:'contain',height:100,width:100}}/>
           <Text style = {{ margin: 5, fontSize: 28,fontFamily:'CourierNew',color:'white' }}>
                TechNews
           </Text>
           <Text style = {{  fontSize: 12,color:'white' }}>
                Improving your way to see news
           </Text>
       </View>
       <View style={{alignItems:"center"}}>
           <Button borderRadius={6} title='Ingresar' style={styles.Boton} backgroundColor={colors.primary}/> 
           <Button borderRadius={6} title='Crear Cuenta'style={styles.Boton} backgroundColor={colors.secundary} /> 
       </View>
    </ImageBackground>
    )
export default Start;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    Boton:{
        margin:5,
        
    }
});