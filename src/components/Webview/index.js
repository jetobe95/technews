import { Container } from 'native-base';
import React, { Component } from 'react';
import { ActivityIndicator, WebView as Web,Share } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
class WebView extends Component {
  constructor(props) {
    super(props);
    const { title, url } = props.navigation.state.params;
    this.title = title;
    this.url = url;
    this.state = {
      title: title,
      loading: true
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerRight: navigation.getParam('loading') ? (
      <ActivityIndicator
        color="white"
        style={{ marginRight: 10 }}
        size="small"
      />
    ) : <Entypo name='share' 
      onPress={()=>
      
      Share.share({message:`Hey !!! Mira lo que encontré en TechNews ${navigation.getParam('url',' ')}`})}
      size={24}
    style={{color:'white',marginRight: 10}}/>
  });
  componentDidMount = () => {
    
  };

  render() {
    const { title, url } = this.props.navigation.state.params;

    const { loading } = this.state;

    return (
      <Container>
        <Web
          onLoad={() => this.props.navigation.setParams({ loading: false })}
          source={{ uri: url }}
          style={{ marginTop: 20 }}
        />
      </Container>
    );
  }
}
export default WebView;
