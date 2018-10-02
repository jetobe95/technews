import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Card, Divider, Text } from 'react-native-elements';
import { string, func, bool, any, object } from 'prop-types';
import moment from 'moment';
import style from './styles';
const styles = StyleSheet.create(style);
const defaultImg =
  'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

class CardnewV2 extends PureComponent {
  static propTypes = {
    urlToImage: string,
    description: string,
    source: object,
    publishedAt: string,
    title: string,
    url: string
  };

  render() {
    const {
      urlToImage,
      description,
      source,
      publishedAt,
      title,
      navigation,
      url
    } = this.props;
    
    const time = moment(publishedAt || Date.now()).fromNow();

    return (
      <TouchableHighlight
        underlayColor="white"
        onPress={() =>
          navigation.navigate('WebView', { title, url, loading: true })
        }
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={styles.featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={styles.noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableHighlight>
    );
  }
}

export default CardnewV2;
