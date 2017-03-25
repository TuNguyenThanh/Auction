import {
  LOGIN_USERNAME_CHANGED, LOGIN_PASSWORD_CHANGED, LOGIN_SUCCESS,
  LOGIN_ERROR, LOGIN_LOAD, LOGIN_ADD_TOKEN, LOGIN_ADD_FIRSTNAME,
  LOGIN_ADD_BALANCE, LOGIN_ADD_ID_USER
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  token: '',
  error: '',
  idUser: null,
  firstName: '',
  balance: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USERNAME_CHANGED:
      return { ...state, username: action.payload, error: '' };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, username: '', password: '', error: '', loading: false };
    case LOGIN_ERROR:
      return { ...state, error: action.payload, password: '', loading: false };
    case LOGIN_LOAD:
      return { ...state, loading: true };
    case LOGIN_ADD_TOKEN:
      return { ...state, token: action.payload };
    case LOGIN_ADD_ID_USER:
      return { ...state, idUser: action.payload };
    case LOGIN_ADD_FIRSTNAME:
      return { ...state, firstName: action.payload };
    case LOGIN_ADD_BALANCE:
      return { ...state, balance: action.payload };
    default:
      return state;
  }
};
