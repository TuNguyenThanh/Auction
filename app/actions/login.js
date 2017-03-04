import { Actions } from 'react-native-router-flux';
import API from '../lib/api';
import {
  LOGIN_USERNAME_CHANGED, LOGIN_PASSWORD_CHANGED, LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR
} from './types';

const MessageBarManager = require('react-native-message-bar').MessageBarManager;

export const changedLoginUsername = (text) => {
  return {
    type: LOGIN_USERNAME_CHANGED,
    payload: text
  };
};

export const changedLoginPassword = (text) => {
  return {
    type: LOGIN_PASSWORD_CHANGED,
    payload: text
  };
};

export const login = (username, password) => {
  console.log(username, password);
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    const params = { username, password };

    return API.post('/login', params).then(resp => {
      console.log(resp);
      if (resp.error) {
        loginUserError(dispatch, resp.error);
      } else {
        loginUserSuccess(dispatch, resp);
      }
    }).catch((error) => {
      console.log(error);
      loginUserError(dispatch, error);
    });
  };
};

export const loginUserSuccess = (dispatch, user) => {
  // MessageBarManager.showAlert({
  //   title: 'Thông báo',
  //   message: 'Đăng nhập thành công',
  //   alertType: 'success'
  // });
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
  Actions.Main({ type: 'reset' });
};

export const loginUserError = (dispatch, error) => {
  MessageBarManager.showAlert({
    title: 'Thông báo',
    message: error,
    alertType: 'error'
  });
  dispatch({
    type: LOGIN_ERROR,
    payload: error
  });
};
