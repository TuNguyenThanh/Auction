import {
  FORGOT_LOAD, FORGOT_SUCCESS, FORGOT_ERROR, FORGOT_PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  error: '',
  mess: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_CHANGED:
      return { ...state, email: action.payload };
    case FORGOT_SUCCESS:
      return { ...state, mess: action.payload, email: '', loading: false };
    case FORGOT_ERROR:
      return { ...state, error: action.payload, email: '', loading: false };
    case FORGOT_LOAD:
      return { ...state, loading: true };
    default:
      return state;
  }
};
