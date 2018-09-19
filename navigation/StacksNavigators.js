import {createStackNavigator} from 'react-navigation';
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Start from "../components/Start";
const ToLoginStackNavigator=createStackNavigator({
    Start:{screen:Start,navigationOptions:{header:null}},
    SignIn:{screen:SignIn,navigationOptions:{title:'Sign In'}},
    SignUp:{screen:SignUp,navigationOptions:{title:'Sign Up'}}
},{initialRouteName:'Start'})
// const ToAppStackNavigator=createStackNavigator({
//     Categorias:{

//     }
// })
export{
    ToLoginStackNavigator
} ;
