
import {categories}from '../../components/Categories-data.json'
import {SIGN_IN,SIGN_UP} from '../actions/actionTypes'
const InitialState = {
  user:'',
  name: '',
  photoURL: '',
  email: '',
  password: '',
  categories: []
};

const UserReducer=(state=InitialState,action)=>{
    switch (action.type) {
        case SIGN_IN:
            return {...state,...action.payload}
           
        case SIGN_UP:
            return {...state,...action.payload}
           
    
        default:
           return state
    }
    return state
}
export default UserReducer