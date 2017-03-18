import { Actions } from 'react-native-router-flux';
import API from '../lib/api';
import {
  FORGOT_LOAD, FORGOT_SUCCESS, FORGOT_ERROR, FORGOT_PASSWORD_CHANGED
} from './types';

const MessageBarManager = require('react-native-message-bar').MessageBarManager;

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
    const params = { email };
    return API.post('/forgotPassword', params).then(resp => {
      if (resp.success === false) {
        forgotUserError(dispatch, resp.error);
      } else {
        forgotUserSuccess(dispatch, resp.success);
      }
    }).catch((error) => {
      forgotUserError(dispatch, error);
    });
  };
};


export const forgotUserSuccess = (dispatch, mess) => {
  MessageBarManager.showAlert({
    title: 'Thông báo',
    message: 'Thành công, vui làm kiểm tra email',
    alertType: 'success'
  });
  dispatch({
    type: FORGOT_SUCCESS,
    payload: mess
  });
};

export const forgotUserError = (dispatch, error) => {
  MessageBarManager.showAlert({
    title: 'Thông báo',
    message: 'Email không tồn tại',
    alertType: 'error'
  });
  dispatch({
    type: FORGOT_ERROR,
    payload: error
  });
};
