import _ from 'lodash';

import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  HANDLE_SELECT_CATEGORIES_CUSTOM
} from '../actions/actionTypes';
import InitialStateForCategories from '../../categories-custom';

const InitialState = {
  user: '',

  photoURL: '',
  email: '',
  password: '',
  categories: InitialStateForCategories,
  key: false
};

const UserReducer = (state = InitialState, action) => {
  const { categories } = state;
  const { payload } = action;

  switch (action.type) {
    case SIGN_IN:
      return { ...state, ...action.payload };

    case SIGN_UP:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return { ...state, ...action.payload };
    case HANDLE_SELECT_CATEGORIES_CUSTOM:
      return {
        ...state,
        categories: _.map(categories||InitialStateForCategories, categorie => {
          return payload.id === categorie.id
            ? { ...categorie, visible: !categorie.visible }
            : categorie;
        })
      };

    default:
      return state;
  }
};
export default UserReducer;
