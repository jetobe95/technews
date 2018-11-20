import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { HandleSelectCustomCategorie } from '../../../../../../services/redux/actions/actions';
import Modal from '../../components/categories/components/Modal-category';
import EmptyList from '../Empty-list';
import ImageTitle from './components/Image-title';

const { width, height } = Dimensions.get('window');

class Categories extends Component {
  state = {
    isOpen: false
  };
  handleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const {
      User: { categories },
      toggleCategories
    } = this.props;
    const data = _.filter(categories, cate => cate.visible === true);

    return (
      <Fragment>
        <Modal
          categories={categories}
          handleOpen={this.handleOpen}
          toggleCategoria={toggleCategories}
          isOpen={this.state.isOpen}
          user={this.props.User}
        />
        />
        <FlatList
          ListEmptyComponent={() => <EmptyList />}
          style={{ flex: 1, height, backgroundColor: '#252525' }}
          numColumns={2}
          contentContainerStyle={{ marginRight: 1, flexDirection: 'column' }}
          columnWrapperStyle={{ flex: 1 }}
          data={data}
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
function MapDispatchToProps(dispatch) {
  return {
    toggleCategories: id => dispatch(HandleSelectCustomCategorie(id))
  };
}

export default connect(
  MapsStateToProps,
  MapDispatchToProps
)(Categories);
