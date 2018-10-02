import React from 'react';
import { Body, Card, CardItem, Content, Left, Text } from 'native-base';
import { Image, TouchableHighlight } from 'react-native';
import { string, object } from 'prop-types';
Cardnew.propTypes = {
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  source: object
};
function Cardnew({
  navigation,
  title,
  source: { name },
  description,
  urlToImage,
  url
}) {
  return (
    <TouchableHighlight
      onPress={() => console.log('Onpress')}
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
                <Text note>{name}</Text>
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
export default Cardnew;
