import { Body, Card, CardItem, Content, Left, Text } from 'native-base';
import * as React from 'react';
import { Image, TouchableHighlight } from 'react-native';
const Cardnew = ({navigation,title, source:{name}, description, urlToImage, url }) => 
  (
    <TouchableHighlight
        onPress={() => console.log('Onpress')}
        onPressIn={() => navigation.navigate('WebView', { title, url, loading: true })}
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
    export default Cardnew;
    
    