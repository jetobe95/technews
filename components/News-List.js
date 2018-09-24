import axios from "axios";
import _ from "lodash";
import { Container } from "native-base";
import React from "react";
import { RefreshControl, SafeAreaView as Safe, ScrollView ,ActivityIndicator,FlatList,Text,View} from "react-native";
import New from "./card-New";
import{Divider} from 'react-native-elements'
const generateURL=({language='es',q,pageSize=15,page=1})=>(
  `https://newsapi.org/v2/everything?page=${page}&language=${language}&q=${q}&pageSize=${pageSize}&apiKey=60a49976bbd7461fabb075d1d4c35371`
)

class ViewListNews extends React.Component {
  static navigationOptions=({navigation})=>({
   title:navigation.getParam('q','News')
  })
  _onRefresh=(page=1)=>{
    const {q}=this.props.navigation.state.params;
    this.setState({isRefreshing:true})
    const API = generateURL({q:q,page:page})
    axios(API)
    .then(resp => this.setState((PrevState)=>{
      return {news:resp.data.articles,isRefreshing:false,totalResults:resp.data.totalResults,isRefreshingEnd:false}
    })).catch(error=>{
      this.setState({isRefreshing:false})

      console.warn({error})
    })
  }

    
  
    
      


  state = {
    news: [],
    isRefreshing:false,
    totalResults:0,
    isRefreshingEnd:false,
    Page:1
    
  }
  componentDidMount() {
    
    const q=this.props.navigation.getParam('q','News');
    console.log({q})
    const API = generateURL({q})
    axios.get(API)
    .then(resp => {console.log(resp);this.setState({ news: resp.data.articles ,totalResults:resp.data.totalResults})})
    .catch(error=>console.warn({error:error}))
    .then(resp=>console.log(resp))
  }

  

  render() {
    const {news,isRefreshingEnd}=this.state;

    return (
      <Safe style={{flex:1}}>

      <Container>
        
        
          <FlatList 
          onEndReachedThreshold={1}
          ListFooterComponent={()=><ActivityIndicator size='large' animating={isRefreshingEnd}/>}
          ListEmptyComponent={()=><View style={{justifyContent:'center',alignItems:'center'}}><Text>Cargando noticias</Text><ActivityIndicator/></View>}
          ItemSeparatorComponent={()=><Divider />}
          keyExtractor={(item,i)=>item.publishedAt}
          data={news}
          renderItem={({item})=>(
            <New
           {...this.props}
          
          source={item.source.name}
          title={item.title}
          description={item.description}
          urlToImage={item.urlToImage}
          url={item.url}
          
        />
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
             onRefresh={this._onRefresh}
            />
          }>
          </FlatList>
            {/* {data} */}
          {/* {isRefreshingEnd&&
          <ActivityIndicator  style={{marginVertical:4}}/>
          
          } */}
        
      </Container>
      </Safe>

    );
  }
}
export default ViewListNews