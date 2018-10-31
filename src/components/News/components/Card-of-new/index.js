import React, { PureComponent } from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, StyleSheet, TouchableHighlight,TouchableOpacity } from 'react-native';
import { Card, Divider, Text } from 'react-native-elements';
import { string, func, bool, any, object } from 'prop-types';
import moment from 'moment';

import style from './styles';
import colors from '../../../../../assets/colors';
const styles = StyleSheet.create(style);
const defaultImg =
  'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

class CardnewV2 extends PureComponent {
  state={
    like:false
  }
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
      url,
      favorite = false,
      saveFavorite=()=>{console.log('Save favorite')}
    } = this.props;
    const json={
      urlToImage,
      description,
      source,
      publishedAt,
      title,
      url,
    }
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
          <TouchableOpacity 
          onPress={()=>{saveFavorite(null,json,this.state.like);this.setState(({like})=>({like:!like}))}}
          style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-around' }}>
            <Divider style={{ backgroundColor: '#dfe6e9',width:'80%' }} />
            {this.state.like ? (
              <Entypo
                name="star"
                size={30}
                style={{ color: colors.secundary }}
              />
            ) : (
              <Entypo
                name="star-outlined"
                size={30}
                style={{ color: colors.secundary }}
              />
            )}
          </TouchableOpacity>
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
