import { func } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewList from '../../../../../../components/News/index';
import { Fetcher } from '../../../../../../services/redux/actions/actions';

class ExplorarContainer extends Component {
  static propTypes = {
    fetchData: func
  };
  componentDidMount() {
    const { fetchData } = this.props;
    const q = this.props.navigation.getParam('q', 'technology');
    fetchData(q);
  }

  render() {
    return <NewList {...this.props} />;
  }
}
const MapStateToProps = ({ News }) => {
  return { News };
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
