import axios from 'axios';
import {Alert} from 'react-native'
import {dataChange} from '../../firebase';
import _ from 'lodash'


import {
  FETCHING_SUCCESS,
  FETCHING_ERROR,
  SIGN_IN,
  SIGN_UP,
  FETCHING,
  CLEAN_CATEGORIES_NEWS,
  SIGN_OUT,
  HANDLE_SELECT_CATEGORIES_CUSTOM
} from './actionTypes';

const CANAL_REF = 'usuarios/tvrhpaKEpTPW2l0kiCVTo1SD6Rr2';

export const loadNews = news => ({
  type: FETCHING_SUCCESS,
  payload: { news, fetching: false }
});
export const loadNewsCategories = news => ({
  type: FETCHING_SUCCESS,
  payload: { newsCategories: news, fetchingNewsCategories: false }
});
export const fetching = () => ({ type: FETCHING, payload: { fetching: true } });
export const fetchingCategories = () => ({
  type: FETCHING,
  payload: { fetchingNewsCategories: true }
});
export const errorFetchingCategories = error => ({
  type: FETCHING_ERROR,
  payload: { errorCategories: error, fetchingNewsCategories: false }
});
export const errorFetching = error => ({
  type: FETCHING_ERROR,
  payload: { error, fetching: false }
});

export const FetchNews = url => axios(url);

export const Fetcher = q => {
  return dispatch => {
    dispatch(fetching());
    axios(generateURL({ q }))
      .then(({ data: news }) => dispatch(loadNews(news)))
      .catch(error => dispatch(errorFetching(error)));
  };
};
export const FetcherCategories = q => {
  if (q == 'canal') {
  console.log('Fecther Categories',{q})
    return dispatch => {
      dispatch(fetchingCategories());
      dataChange(CANAL_REF)
      .then(snapshot=>{
        const news=_.map(snapshot.val().favoritos,item=>item)
        dispatch(loadNewsCategories({articles:news}))
      })
      .catch((error)=>{
          dispatch(errorFetchingCategories(error))
      })
     
    };
  }
  return dispatch => {
    dispatch(fetchingCategories());
    axios(generateURL({ q }))
      .then(({ data: news }) => {
        console.log('Line 74',news)
        dispatch(loadNewsCategories(news))

        })
      .catch(error => dispatch(errorFetchingCategories(error)));
  };
};

export const ClearNewsCategories = () => {
  return {
    type: CLEAN_CATEGORIES_NEWS,
    payload: { newsCategories: [] }
  };
};

const generateURL = ({ q }) => {
  return `https://newsapi.org/v2/everything?language=es&q="${q}"&apiKey=60a49976bbd7461fabb075d1d4c35371`;
};
export const SignIn = ({ user, password, email, key }) => ({
  type: SIGN_IN,
  payload: { user, password, email, key }
});
export const SignUp = ({ password, user, email }) => ({
  type: SIGN_UP,
  payload: { password, user, email }
});
export const SignOut = ({ key, ...args }) => ({
  type: SIGN_OUT,
  payload: { key, ...args }
});
export const HandleSelectCustomCategorie = id => ({
  type: HANDLE_SELECT_CATEGORIES_CUSTOM,
  payload: { id }
});
