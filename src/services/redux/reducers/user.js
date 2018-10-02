import { SIGN_IN, SIGN_UP,SIGN_OUT } from '../actions/actionTypes';
const InitialState = {
  user: '',

  photoURL: '',
  email: '',
  password: '',
  categories: [],
  key: false
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, ...action.payload };

    case SIGN_UP:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export default UserReducer;
