import { func } from 'prop-types';
import { Alert } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewList from '../../../../../../components/News/index';
import { Fetcher } from '../../../../../../services/redux/actions/actions';
import { create } from '../../../../../../services/firebase';
class ExplorarContainer extends Component {
  static propTypes = {
    fetchData: func
  };
  componentDidMount() {
    const { fetchData } = this.props;
    const q = this.props.navigation.getParam('q', 'technology');
    fetchData(q);
  }
  saveFavorite = async (ppp, item, like) => {
    const {
      User: {
        user: { uid }
      }
    } = this.props;
    if (like) {
      try {
        await create(`usuarios/${uid}/favoritos/${item.title}`).remove();

      } catch (error) {
        Alert.alert('Error', JSON.stringify(error));
      }
    }

    const json = {
      [item.title]: {
        ...item
      }
    };
    console.log({ json });
    try {
      await create(`usuarios/${uid}/favoritos`).update(json);
    } catch (error) {
      Alert.alert('Error', JSON.stringify(error));
    }
    return;
  };

  render() {
    const {
      User: {
        user: { uid }
      }
    } = this.props;
    console.log({ uid });
    return <NewList saveFavorite={this.saveFavorite} {...this.props} />;
  }
}
const MapStateToProps = ({ News, User }) => {
  return { News, User };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(Fetcher(url))
  };
};

const ExplorarContainerWithRedux = connect(
  MapStateToProps,
  mapDispatchToProps
)(ExplorarContainer);

export default ExplorarContainerWithRedux;
