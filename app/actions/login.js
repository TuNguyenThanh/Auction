import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import API from '../lib/api';
import {
  LOGIN_USERNAME_CHANGED, LOGIN_PASSWORD_CHANGED, LOGIN_USER,
  LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_ADD_TOKEN, LOGIN_ADD_FIRSTNAME,
  LOGIN_ADD_BALANCE, LOGIN_ADD_ID_USER
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

export const addToken = (text) => {
  return {
    type: LOGIN_ADD_TOKEN,
    payload: text
  };
};

export const newToken = (token) => {
  return (dispatch) => {
    //dispatch({ type: LOGIN_USER });
    const params = { token };
    return API.post('/user', params).then(resp => {
      console.log(resp);
      if (resp.success === false) {
        loginUserError(dispatch, resp.error.id);
      } else {
        console.log(resp.token);
        console.log('new token');
        loginUserSuccess(dispatch, resp);
      }
    }).catch((error) => {
      console.log(error);
      loginUserError(dispatch, error);
    });
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    const params = { username, password };
    return API.post('/login', params).then(resp => {
      console.log(resp);
      if (resp.success === false) {
        loginUserError(dispatch, resp.error.id);
      } else {
        loginUserSuccess(dispatch, resp);
      }
    }).catch((error) => {
      console.log(error);
      loginUserError(dispatch, error);
    });
  };
};

export const loginUserSuccess = (dispatch, resp) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: resp.token
  });
  dispatch({
    type: LOGIN_ADD_FIRSTNAME,
    payload: resp.profile.firstname
  });
  dispatch({
    type: LOGIN_ADD_BALANCE,
    payload: resp.profile.balance
  });
  dispatch({
    type: LOGIN_ADD_ID_USER,
    payload: resp.profile.id
  });

  try {
    AsyncStorage.setItem('isLogin', resp.token);
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
