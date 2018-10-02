import { combineReducers } from 'redux';
import NewsReducer from './news';
import UserReducer from './user';


const reducers = combineReducers({
  
  News: NewsReducer,
  User: UserReducer
});


export { reducers };

