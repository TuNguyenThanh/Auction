import { Actions } from 'react-native-router-flux';
import API from '../lib/api';
import {
  FORGOT_LOAD, FORGOT_SUCCESS, FORGOT_ERROR, FORGOT_PASSWORD_CHANGED
} from './types';


export const changedForgotPassword = (text) => {
  console.log(text);
  return {
    type: FORGOT_PASSWORD_CHANGED,
    payload: text
  };
};

export const forgotPassword = (email) => {
  console.log(email);
  return (dispatch) => {
    dispatch({ type: FORGOT_LOAD });
    //const params = { email };

    return forgotUserSuccess(dispatch, 'thanh cong');
    // return API.post('/login', params).then(resp => {
    //   console.log(resp);
    //   if (resp.error) {
    //     loginUserError(dispatch, resp.error);
    //   } else {
    //     loginUserSuccess(dispatch, resp);
    //   }
    // }).catch((error) => {
    //   console.log(error);
    //   loginUserError(dispatch, error);
    // });
  };
};


export const forgotUserSuccess = (dispatch, mess) => {
  dispatch({
    type: FORGOT_SUCCESS,
    payload: mess
  });
  //Actions.Main({ type: 'reset' });
};

export const forgotUserError = (dispatch, error) => {
  dispatch({
    type: FORGOT_ERROR,
    payload: error
  });
};
