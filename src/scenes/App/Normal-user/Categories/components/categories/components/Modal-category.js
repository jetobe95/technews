import { EvilIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Dimensions, Modal, TouchableOpacity, View, Alert } from 'react-native';
import _ from 'lodash';
import { create } from '../../../../../../../services/firebase';

//Datos de categorias
import { categorias } from '../components/datos-de-categoria.json';
import CategoryListPicker from './category-list-picker';
const screen = Dimensions.get('window');
const width = screen.width,
  height = screen.height;
export default class ModalCategory extends Component {
  SaveCategories = () => {
    const categorias = _.chain(this.props.categories)
      .map(item => ({ id: item.id, visible: item.visible }))
      .value();
    create(`usuarios/${this.props.user.user.uid}/categorias`)
      .set(categorias)
      .then(() => {
        console.log('Se han guardado las categorias !!');
      })
      .catch(() => {
        console.log('Error al guardar categorias!');
      });
  };
  toggleVisible = id => {
    return this.props.toggleCategoria(id);
  };

  render() {
    const { isOpen, handleOpen, categories } = this.props;
    return (
      <Modal
        visible={isOpen}
        onDismiss={() => this.SaveCategories()}
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
              <CategoryListPicker
                toggleVisible={this.toggleVisible}
                data={categories}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
