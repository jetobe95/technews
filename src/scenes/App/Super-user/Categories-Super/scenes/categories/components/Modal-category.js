import React, { Component, Fragment } from 'react';
import { Modal, View, Text, Dimensions, TouchableOpacity	,Platform } from 'react-native';
import { Input, Label, Form, Button, Item, Header } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';

import CategoryListPicker from './category-list-picker';
//Datos de categorias
import { categorias } from '../components/datos-de-categoria.json';
import colors from '../../../../../../../../assets/colors';

const screen = Dimensions.get('window');
const width = screen.width,
  height = screen.height;

export default class ModalCategory extends Component {
  render() {
    const { isOpen, handleOpen } = this.props;
    return (
      <Fragment>
        <Modal
          visible={isOpen}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
          transparent
          animationType="slide"
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
               <TouchableOpacity
                onPress={() => handleOpen()}
                style={{ alignItems:'center'}}
              >
                <EvilIcons name="close" style={{ fontSize: 25 }} />
              </TouchableOpacity>
          </Header>
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
                width: width,
                height: height,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
           
              <View
                style={{
                  height: '90%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CategoryListPicker data={categorias} />
              </View>
            </View>
          </View>
        </Modal>
      </Fragment>
    );
  }
}
