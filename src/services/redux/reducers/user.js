import _ from 'lodash';

import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  HANDLE_SELECT_CATEGORIES_CUSTOM,
  CARGA_CATEGORIAS_FIREBASE
} from '../actions/actionTypes';
import { squares } from '../../datoscategorias';

const InitialState = {
  user: '',
  photoURL: '',
  email: '',
  password: '',
  categories: squares,
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
      const { id } = payload;
      const nuevasCategorias = _.map(categories, item => {
        if (item.id == id) return { ...item, visible: !item.visible };
        return item;
      });
      return {
        ...state,
        categories: nuevasCategorias
      };

    case CARGA_CATEGORIAS_FIREBASE:
      return {
        ...action.payload,
        ...state
      };

    default:
      return state;
  }
};
export default UserReducer;
