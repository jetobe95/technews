import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  FetcherCategories,
  ClearNewsCategories
} from '../../../../../../../services/redux/actions/actions';
import NewsList from '../../../../../../../components/News/index-normal-user';
class Categorias extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('q', 'News')
  });
  componentWillUnmount = () => {
    const { ClearNewsCategories } = this.props;
    ClearNewsCategories();
  };

  componentDidMount() {
    const { fetchData } = this.props;

    const q = this.props.navigation.getParam('q', 'technology');
    fetchData(q);
  }
  render() {
    return <NewsList {...this.props} />;
  }
}
const MapStateToProps = ({ News }) => {
  return {
    News: { news: News.newsCategories, fetching: News.fetchingNewsCategories }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(FetcherCategories(url)),
    ClearNewsCategories:()=> dispatch(ClearNewsCategories())
  };
};

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(Categorias);
