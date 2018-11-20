import React, { Component } from 'react';
import { Modal, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Input, Label, Form, Button, Item } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import CategoryListPicker from './category-list-picker';

import {squares} from '../datoscategorias';
const screen = Dimensions.get('window');
const width = screen.width,
  height = screen.height;
import { categorias } from '../components/datos-de-categoria.json';
import colors from '../../../../../../../../assets/colors';
import { create } from '../../../../../../../services/firebase';

const screen = Dimensions.get('window');
const width = screen.width,
  height = screen.height;


export default class ModalCategory extends Component {
   SaveCategories=()=>{
    let cate = {
      categorias: categorias
    };

    create(`usuarios/${this.props.user.user.uid}/`)
    .update(cate)
    .then(() => {
      console.log('Se han guardado las categorias !!');
    })
    .catch(() => {              
      console.log('Error al guardar categorias')
    });
    this.props.handleOpen();
  }
  render() {
    const { isOpen, handleOpen, user } = this.props;
    return (
      <Modal
        visible={isOpen}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}
        transparent
        animationType="slide"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#656565',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Header 
          androidStatusBarColor='transparent'
          span={Platform.OS=='ios'} 
          style={{ backgroundColor: colors.secundary }}>
            <Text
              style={{ color: 'white', fontSize: 27, fontFamily: 'Roboto' }}
            >
              Lista de Categorias
            </Text>
          </Header>
          <View
            style={{
              backgroundColor: 'white',
              width: width * 0.9,
              height: height * 0.9,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              onPress={() => this.SaveCategories()}
              style={{ position: 'absolute', top: 0, right: 0, padding: 10 }}
            >
              <EvilIcons name="close" style={{ fontSize: 25 }} />
            </TouchableOpacity>
            <View
              style={{
                height: '90%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CategoryListPicker data={squares} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
