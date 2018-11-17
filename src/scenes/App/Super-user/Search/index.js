import React, { Component } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  Header,
  Icon,
  Input,
  Item,
  Text
} from 'native-base';
import {
  FlatList,
  Keyboard,
  RefreshControl,
  StyleSheet,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import _ from 'lodash';
import { Constants } from 'expo';


import NavigationConfig from '../../../../components/Header/index';
import CardnewV2 from '../../../../components/News/components/Card-of-new/index';
import WebView from '../../../../components/Webview/index';


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
    const { list: data, NoResuls, loading, search } = this.state;
    return (
      <Container

        style={{
          paddingTop: Constants.statusBarHeight,
          margin:0
        }}
      >
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              value={search}
              autoFocus
              clearTextOnFocus
              onKeyPress={_.debounce(() => this._Search(), 750)}
              onChangeText={text => {
                this.setState({ search: text });
              }}
              onSubmitEditing={() => {
                if (search === '') return Keyboard.dismiss();
                this._Search();
              }}
              returnKeyType="search"
              clearButtonMode="always"
              autoCorrect={false}
              placeholder="Redes Neuronales, Robotica"
            />
          </Item>
          <Button
            transparent
            onPress={() =>
              this.setState({ search: '', list: [] }, () => Keyboard.dismiss())
            }
          >
            <Text style={{ color: 'black', fontSize: 12 }}>Cancelar</Text>
          </Button>
        </Header>

        <FlatList
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={this._Search} />
          }
          ListHeaderComponent={() => (
            <View>
              {NoResuls &&
                search !== '' && <Text>No se Encontraron resultados</Text>}
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

const StackNavigation = {
  Buscar: { screen: Buscar, navigationOptions: { header: null } },
  WebView: { screen: WebView }
};

export default createStackNavigator(StackNavigation, NavigationConfig());

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
