import { Grid, Row } from 'native-base';
import React, { Component, Fragment } from 'react';
import {
  ScrollView,
  FlatList,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

const { width, height } = Dimensions.get('window');

import ImageTitle from './components/Image-title';
import EmptyList from '../Empty-list';
import Modal from '../../components/categories/components/Modal-category';
import { squares } from '../categories/components/datoscategorias';
class Categories extends Component {
  state = {
    isOpen: false
  };
  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const {
      User: { categories }
    } = this.props;
    const data = _.filter(categories, cate => cate.visible === true);

    return (
      <Fragment>
        <Modal handleOpen={this.handleOpen} isOpen={this.state.isOpen} />
        <FlatList
          ListEmptyComponent={() => <EmptyList />}
          style={{ flex: 1, height, backgroundColor: '#252525' }}
          numColumns={2}
          contentContainerStyle={{ marginRight: 1, flexDirection: 'column' }}
          columnWrapperStyle={{ flex: 1 }}
          data={squares}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ImageTitle
              HandlePress={() =>
                this.props.navigation.navigate('ListNews', { q: item.q })
              }
              {...item}
            />
          )}
        />
        <TouchableOpacity
          onPress={() => this.setState({ isOpen: true })}
          style={{
            position: 'absolute',
            bottom: 0,
            height: 50,
            width: 50,
            backgroundColor: 'red',
            borderRadius: 25,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
          }}
        >
          <Text style={{ fontSize: 27, color: '#fff', lineHeight: 29 }}>+</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
function MapsStateToProps({ User }) {
  return {
    User
  };
}

export default connect(MapsStateToProps)(Categories);
