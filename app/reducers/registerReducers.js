import {
  FIRST_NAME_CHANGED, LAST_NAME_CHANGED, REGISTER_EMAIL_CHANGED, REGISTER_PHONE_CHANGED,
  REGISTER_USERNAME_CHANGED, REGISTER_PASSWORD_CHANGED, REGISTER_RE_PASSWORD_CHANGED,
  REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_USER
} from '../actions/types';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  username: '',
  password: '',
  repassword: '',
  data: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRST_NAME_CHANGED:
      return { ...state, firstname: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastname: action.payload };
    case REGISTER_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case REGISTER_PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case REGISTER_USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case REGISTER_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case REGISTER_RE_PASSWORD_CHANGED:
      return { ...state, repassword: action.payload };
    case REGISTER_SUCCESS:
      return { ...state, data: action.payload, firstname: '', lastname: '', email: '', phone: '', username: '', password: '', repassword: '', error: '', loading: false };
    case REGISTER_ERROR:
      return { ...state, error: action.payload, loading: false };
    case REGISTER_USER:
      return { ...state, error: '', loading: true };
    default:
      return state;
  }
};
