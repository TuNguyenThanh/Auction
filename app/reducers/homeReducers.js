import {
  HOME_FETCH_DATA
} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};
