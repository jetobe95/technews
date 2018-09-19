import {createStackNavigator} from 'react-navigation';
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Start from "../components/Start";
const ToLoginStackNavigator=createStackNavigator({
    Start:{screen:Start,navigationOptions:{header:null}},
    SignIn:{screen:SignIn},
    SignUp:{screen:SignUp}
},{initialRouteName:'Start'})
// const ToAppStackNavigator=createStackNavigator({
//     Categorias:{

//     }
// })
export{
    ToLoginStackNavigator
} ;
