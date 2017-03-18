import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
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
      if (resp.success === false) {
        loginUserError(dispatch, resp.error.id);
      } else {
        loginUserSuccess(dispatch, resp.token);
      }
    }).catch((error) => {
      console.log(error);
      loginUserError(dispatch, error);
    });
  };
};

export const loginUserSuccess = (dispatch, token) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: token
  });
  try {
    AsyncStorage.setItem('isLogin', 'true');
    console.log('Save login data');
  } catch (error) {
    // Error saving data
    console.log('Error saving data');
  }
  Actions.Main({ type: 'reset' });
};

export const loginUserError = (dispatch, error) => {
  if (error === 81) {
    MessageBarManager.showAlert({
      title: 'Thông báo',
      message: 'Sai tên đăng nhập hoặc mật khẩu',
      alertType: 'error'
    });
  } else {
    MessageBarManager.showAlert({
      title: 'Thông báo',
      message: error,
      alertType: 'error'
    });
  }

  dispatch({
    type: LOGIN_ERROR,
    payload: error
  });
};
