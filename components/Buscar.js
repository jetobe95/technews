import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  FlatList,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import {createStackNavigator}from 'react-navigation';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Content,
  Body
} from 'native-base';
import axios from 'axios';
import CardnewV2 from './Card-news-version2';
import WebView from './WebView';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../assets/colors';
import NavigationConfig from '../navigation/NavigationConfig'
const generateURL = ({ language = 'es', q, pageSize = 5, page = 1 }) => {
  if (q == 'technology') {
    return `https://newsapi.org/v2/everything?language=es&q="${q}"&apiKey=60a49976bbd7461fabb075d1d4c35371`;
  }
  return `https://newsapi.org/v2/everything?language=es&q="${q}"&apiKey=60a49976bbd7461fabb075d1d4c35371`;
};
class Buscar extends Component {
  state = {
    search: '',
    loading: false,
    totalResults: 0,
    list: [],
    NoResuls: false
  };
  _Search = () => {
    this.setState({ loading: true });
    const { search: q } = this.state;

    axios(generateURL({ q })).then(({ data: { articles, totalResults } }) => {
      this.setState(() => {
        if (totalResults == 0)
          return { NoResuls: true, loading: false, list: [] };
        return { list: articles, loading: false, NoResuls: false };
      });
    });
  };

  render() {
    const { list: data, NoResuls, loading } = this.state;
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              // onKeyPress={() => this._Search()}
              onChangeText={text => {
                this.setState({ search: text });
              }}
              onSubmitEditing={() => {
                this._Search();
              }}
              returnKeyType="search"
              clearButtonMode="always"
              autoCorrect={false}
              placeholder="Redes Neuronales, Robotica"
            />
          </Item>
          <Button transparent>
            <Text style={{ color: 'black', fontSize: 12 }}>Cancelar</Text>
          </Button>
        </Header>
       
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={this._Search}
              />
            }
            ListHeaderComponent={() => (
              <View>
                {NoResuls && <Text>No se Encontraron resultados</Text>}
              </View>
            )}

            data={data}
            renderItem={({ item }) => <CardnewV2 {...this.props} {...item} />}
            keyExtractor={item => item.url}
          />
       
      </Container>
    );
  }
}
const StackNavigation={
 Buscar:{ screen:Buscar,navigationOptions:{header:null}},
 WebView:{ screen:WebView},
}

export default createStackNavigator(StackNavigation,NavigationConfig());

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
