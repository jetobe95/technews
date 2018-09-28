import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  FetcherCategories,
  ClearNewsCategories
} from '../redux/actions/actions';
import NewsList from '../components/News-List';
const generateURL = ({ language = 'es', q, pageSize = 5, page = 1 }) => {
  if (q == 'technology') {
    return `https://newsapi.org/v2/everything?language=es&q="${q}"&apiKey=60a49976bbd7461fabb075d1d4c35371`;
  }
  return `https://newsapi.org/v2/everything?language=es&q="${q}"&apiKey=60a49976bbd7461fabb075d1d4c35371`;
};
class CategoriasContainer extends Component {
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
    // const API = generateURL({ q });
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
)(CategoriasContainer);
