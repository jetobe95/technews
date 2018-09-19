import React from "react";
import { StatusBar, Image, ScrollView,RefreshControl,SafeAreaView as Safe } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import {createStackNavigator} from "react-navigation"
import axios from "axios"
import New from "../NewComponent/New"
import _ from "lodash";
import WebView from "../web-view/WebView";
class HomeScreen extends React.Component {
  static navigationOptions={
    header:null
  }
  _onRefresh=()=>{
      this.setState({isRefreshing:true})
      const API = "https://newsapi.org/v2/top-headlines?category=technology&pageSize=20&country=co&apiKey=60a49976bbd7461fabb075d1d4c35371";
    
  
    
    axios(API)
    .then(resp => this.setState((PrevState)=>{
      
      return {news:resp.data.articles,isRefreshing:false}


    })).catch(error=>{
      this.setState({isRefreshing:false})
      console.warn({error})
    })
  }
  state = {
    news: [],
    isRefreshing:false
  }
  componentDidMount() {
    const API = "https://newsapi.org/v2/top-headlines?category=technology&pageSize=20&country=co&apiKey=60a49976bbd7461fabb075d1d4c35371";
    
  
    
    axios(API)
    .then(resp => this.setState({ news: resp.data.articles })).catch(error=>console.warn({error}))
  }
  render() {
    const {news}=this.state;
    const data = _.map(news,new1 => {
      return (
        <New
        {...this.props}
          key={new1.publishedAt}
          source={new1.source.name}
          title={new1.title}
          description={new1.description}
          urlToImage={new1.urlToImage}
          url={new1.url}
          
        />
      )
    })
    return (
      <Safe style={{flex:1}}>

      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>New News</Title>
          </Body>
          <Right />
        </Header>
        
          <ScrollView 
        
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
             onRefresh={this._onRefresh}
            />
          }>
            {data}
          </ScrollView>
        
      </Container>
      </Safe>

    );
  }
}
export default createStackNavigator({
  HomeScreen:{screen:HomeScreen},
  webview:{screen:WebView,navigationOptions:{   
    drawerLockMode:'unlocked',  
}},
},{
  initialRouteKey:"HomeScreen"
})