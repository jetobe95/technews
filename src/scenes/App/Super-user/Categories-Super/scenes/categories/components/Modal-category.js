import React, { Component } from 'react';
import { Modal, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Input, Label, Form, Button, Item } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import CategoryListPicker from './category-list-picker';
//Datos de categorias
import {squares} from '../datoscategorias';
const screen = Dimensions.get('window');
const width = screen.width,
  height = screen.height;
export default class ModalCategory extends Component {
  render() {
    const { isOpen, handleOpen } = this.props;
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
              onPress={() => handleOpen()}
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
