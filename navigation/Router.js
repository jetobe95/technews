import {createSwitchNavigator} from 'react-navigation';
import {ToLoginStackNavigator} from './StacksNavigators'
const Switch1=createSwitchNavigator({
    ToLoginStackNavigator:{
        screen:ToLoginStackNavigator
    }
})
// const Switch2=createSwitchNavigator({

// })

export {
    Switch1
}