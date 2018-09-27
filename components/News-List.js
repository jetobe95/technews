import axios from 'axios';
import _ from 'lodash';
import { Container } from 'native-base';
import React from 'react';
import {
  RefreshControl,
  SafeAreaView as Safe,
  ActivityIndicator,
  FlatList,
  Text,
  View
} from 'react-native';
import New from './card-New';
import { Divider } from 'react-native-elements';
import CardnewV2 from './Card-news-version2';
const generateURL = ({ language = 'es', q, pageSize = 5, page = 1 }) => {
  if (q == 'technology') {
    return `https://newsapi.org/v2/everything?language=es&q=${q}&apiKey=60a49976bbd7461fabb075d1d4c35371`;
  }
  return `https://newsapi.org/v2/everything?language=es&q=${q}&apiKey=60a49976bbd7461fabb075d1d4c35371`;
};

class ViewListNews extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('q', 'News')
  });
  _onRefresh = () => {
    const q = this.props.navigation.getParam('q', 'technology');

    this.setState({ isRefreshing: true });
    const API = generateURL({ q});
      axios(API)
      .then(resp =>
        this.setState(PrevState => {
          return {
            news: resp.data.articles,
            isRefreshing: false,
            totalResults: resp.data.totalResults,
            isRefreshingEnd: false
          };
        })
      )
      .catch(error => { this.setState({ isRefreshing: false });

        console.warn({ error });
      });
  };

  state = {
    news: [],
    isRefreshing: false,
    totalResults: 0,
    isRefreshingEnd: false,
    Page: 1
  };
  componentDidMount() {
    const q = this.props.navigation.getParam('q', 'technology');
    const API = generateURL({ q });
    axios
      .get(API)
      .then(resp => {
        this.setState({
          news: resp.data.articles,
          totalResults: resp.data.totalResults
        });
      })
      .catch(error => console.log({ error: error }))
  }

  render() {
    const { news, isRefreshingEnd } = this.state;

    return (
      <Safe style={{ flex: 1 }}>
        <Container>
          <FlatList
            onEndReachedThreshold={1}
            ListFooterComponent={() => (
              <ActivityIndicator size="large" animating={isRefreshingEnd} />
            )}
            ListEmptyComponent={() => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Cargando noticias</Text>
                <ActivityIndicator />
              </View>
            )}
            keyExtractor={(item, i) => item.url}
            data={news}
            renderItem={({ item }) => ( <CardnewV2 {...this.props} {...item}/>)}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefresh}
              />
            }
          />
        </Container>
      </Safe>
    );
  }
}
export default ViewListNews;
