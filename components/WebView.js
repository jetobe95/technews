import { Container } from "native-base";
import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, WebView as Web } from "react-native";


class WebView extends Component {
    constructor(props){
        super(props)
        const {title,url}=props.navigation.state.params
        this.title=title
        this.url=url;
        console.log({title})
        this.state={
            title:title,
            loading:true
        }
    }

    static navigationOptions=({navigation})=>({
            title:navigation.getParam('title'),
            headerRight:navigation.getParam('loading')? <ActivityIndicator color='white' style={{marginRight:10}} size="small" />:null
    })
    componentDidMount = () => {
     
    }
    
    render() {
        const {title,url}=this.props.navigation.state.params;
        
        const{loading} =this.state
        
        return (
            <Container>
             
            <Web
            onLoad={()=> this.props.navigation.setParams({'loading':false})}
            source={{uri:url}}
            style={{marginTop: 20}}
          />
            </Container>
        );
    }
}
export default WebView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});