
import React, { Component } from 'react'
import {Modal,View,Text,Dimensions,TouchableOpacity} from 'react-native'
import {Input,Label,Form,Button,Item} from 'native-base'
import {EvilIcons} from '@expo/vector-icons';
const screen=Dimensions.get('window');
const width=screen.width,height=screen.height
export default class ModalCategory extends Component {
  render() {
      const {isOpen,handleOpen}=this.props;
    return (
            <Modal visible={isOpen} transparent animationType='slide'>
                <View style={{flex:1,backgroundColor:'#656565',justifyContent:'space-evenly',alignItems:'center'}}>
                <View 
                   style={{backgroundColor:'white',
                   width:width*0.9,height:height*0.4,borderRadius:20,
                   justifyContent:'center',
                   alignItems:'center'
                }}>
                <TouchableOpacity 
                onPress={()=>handleOpen()}
                
                style={{position:'absolute',top:0,right:0,padding:10}}>

                <EvilIcons name='close' style={{fontSize:25,}}/>
                </TouchableOpacity>
                    <Item floatingLabel>
                    <Label>Nombre la categoria</Label>
                    <Input
                     
                    style={{width:'50%',}}
                    />
                    </Item>
                   
                    <Button
                    style={{width:'90%'}}
                    info
                    small
                    rounded
                    bordered

                    >
                    <Text>Cick</Text>
                    </Button>
                   </View>
                </View>
            </Modal>

        )
  }
}
