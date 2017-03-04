import {
  LOGIN_USERNAME_CHANGED, LOGIN_PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOAD
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  user: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USERNAME_CHANGED:
      return { ...state, username: action.payload, error: '' };
    case LOGIN_PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, username: '', password: '', error: '', loading: false };
    case LOGIN_ERROR:
      return { ...state, error: action.payload, password: '', loading: false };
    case LOGIN_LOAD:
      return { ...state, loading: true };
    default:
      return state;
  }
};
