import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Card, Divider, Text } from 'react-native-elements';
import moment from 'moment';
const defaultImg =
  'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

class CardnewV2 extends PureComponent {
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
    const time = moment(publishedAt || moment.now()).fromNow();

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

const styles = StyleSheet.create({
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  }
});
