import { Body, Card, CardItem, Content, Left, Text } from 'native-base';
import * as React from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native';

export default class Cardnew extends React.Component {
  render() {
    const { navigation } = this.props;
    const { title, source, description, urlToImage, url } = this.props;

    return (
      <TouchableHighlight
        onPress={() => console.log('ONpress')}
        onPressIn={() =>
          navigation.navigate('WebView', { title, url, loading: true })
        }
      >
        <Content padder={false}>
          <Card style={{ margin: 0, padding: null, backgroundColor: 'yellow' }}>
            <CardItem cardBody>
              {urlToImage && (
                <Image
                  source={{ uri: urlToImage }}
                  style={{
                    height: 200,
                    width: null,
                    flex: 1,
                    resizeMode: 'contain'
                  }}
                />
              )}
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: '#0066cc'
                    }}
                  >
                    {title}
                  </Text>
                  <Text note>{source}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>{description}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </TouchableHighlight>
    );
  }
}
