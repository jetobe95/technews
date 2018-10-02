import {
  FETCHING_SUCCESS,
  FETCHING,
  FETCHING_ERROR,
  CLEAN_CATEGORIES_NEWS
} from '../actions/actionTypes';

const InicialState = {
  news: [],
  newsCategories: [],
  favorites: [],
  fetching: false,
  fetchingNewsCategories: false,
  error: '',
  errorCategories: '',


};
const NewsReducer = (state = InicialState, action) => {
  switch (action.type) {
    case FETCHING_SUCCESS:
      return { ...state, ...action.payload };
    case FETCHING:
      return { ...state, ...action.payload };
    case FETCHING_ERROR:
      return { ...state, ...action.payload };
    case CLEAN_CATEGORIES_NEWS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default NewsReducer;
