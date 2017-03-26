import {
  HOME_FETCH_DATA, HOME_FETCH_DATA_SUCCESS, HOME_FETCH_DATA_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_FETCH_DATA:
      return { ...state, loading: true };
    case HOME_FETCH_DATA_ERROR:
      return { ...state, error: action.payload, loading: false };
    case HOME_FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: '' };
    default:
      return state;
  }
};
