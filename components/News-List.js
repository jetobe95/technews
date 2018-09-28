import { Container } from 'native-base';
import React from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView as Safe,
  Text,
  View
} from 'react-native';
import CardnewV2 from './Card-news-version2';
const ViewListNews = props => {
  const {
    News: {
      news: { articles },
      fetching
    },
    fetchData,
    navigation: { getParam }
  } = props;

  return (
    <Safe style={{ flex: 1 }}>
      <Container>
        <FlatList
          ListEmptyComponent={() => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text>No Hay Noticias</Text>
            </View>
          )}
          keyExtractor={(item, i) => item.url}
          data={articles}
          renderItem={({ item }) => <CardnewV2 {...props} {...item} />}
          refreshControl={
            <RefreshControl
              refreshing={fetching}
              onRefresh={() =>
                fetchData(getParam('q', 'technology'))
              }
            />
          }
        />
      </Container>
    </Safe>
  );
};

export default ViewListNews;
