import * as React from 'react';
import {Image, View, StyleSheet ,TouchableOpacity} from 'react-native';
import { Constants } from 'expo';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class New extends React.Component {
  render() {
    const {navigation}=this.props;
    const {title,source,description,urlToImage,url}=this.props;
    
   
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("webview",{title,url,loading:true})}  >
        <Content padder={false} >
          <Card style={{margin:0,padding:null,backgroundColor:'yellow'}} >            
            <CardItem cardBody>
              {urlToImage!=null&&<Image source={{uri: urlToImage}} style={{height: 200, width: null, flex: 1,resizeMode:"contain"}}/>}
            </CardItem>
            <CardItem>
              <Left>               
                <Body>
                  <Text style={{fontWeight:"bold",fontSize:18,color:"#0066cc"}}>{title}</Text>
                  <Text note>{source}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text  >{description}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </TouchableOpacity>
    );
  }
}

