import {
  CHECK_CODE_CHANGED, CHECK_CODE_LOAD, CHECK_CODE_SUCCESS, CHECK_CODE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  code: '',
  error: '',
  mess: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_CODE_CHANGED:
      return { ...state, code: action.payload };
      case CHECK_CODE_SUCCESS:
        return { ...state, mess: action.payload, loading: false };
      case CHECK_CODE_ERROR:
        return { ...state, error: action.payload, loading: false };
      case CHECK_CODE_LOAD:
        return { ...state, loading: true };
      default:
        return state;
  }
};
