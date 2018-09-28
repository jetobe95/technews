import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Fetcher } from '../redux/actions/actions';
import NewList from '../components/News-List';
import { createStackNavigator } from 'react-navigation';
import NavigationConfig from '../navigation/NavigationConfig';
import WebView from '../components/WebView';

class ExplorarContainer extends Component {
    
      componentDidMount() {
        const { fetchData } = this.props;
        const q = this.props.navigation.getParam('q', 'technology');
        fetchData(q);
      }
    
        
  render() {
    return (
     <NewList {...this.props}/>
    )
  }
}
const MapStateToProps = ({ News }) => {
    return { News };
  };
  const mapDispatchToProps = dispatch => {
    return {
      fetchData: url => dispatch(Fetcher(url))
    };
  };
  
const ExplorarContainerWithRedux= connect(
    MapStateToProps,
    mapDispatchToProps
  )(ExplorarContainer);

  const Stack=createStackNavigator(
      {ExplorarContainer:{
          screen:ExplorarContainerWithRedux,
          navigationOptions:{
              title:'Explorar'
          }
      },
      WebView:{
          screen:WebView
      }
    },NavigationConfig())
    export default Stack