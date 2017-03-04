import { Actions } from 'react-native-router-flux';
import API from '../lib/api';
import {
  FIRST_NAME_CHANGED, LAST_NAME_CHANGED, REGISTER_EMAIL_CHANGED,
  REGISTER_USERNAME_CHANGED, REGISTER_PASSWORD_CHANGED, REGISTER_RE_PASSWORD_CHANGED,
  REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_USER
} from './types';

const MessageBarManager = require('react-native-message-bar').MessageBarManager;

export const changedFirstName = (text) => {
  return {
    type: FIRST_NAME_CHANGED,
    payload: text
  };
};

export const changedLastName = (text) => {
  return {
    type: LAST_NAME_CHANGED,
    payload: text
  };
};

export const changedEmail = (text) => {
  return {
    type: REGISTER_EMAIL_CHANGED,
    payload: text
  };
};

export const changedUsername = (text) => {
  return {
    type: REGISTER_USERNAME_CHANGED,
    payload: text
  };
};

export const changedPassword = (text) => {
  return {
    type: REGISTER_PASSWORD_CHANGED,
    payload: text
  };
};

export const changedRePassword = (text) => {
  return {
    type: REGISTER_RE_PASSWORD_CHANGED,
    payload: text
  };
};

export const createAccount = (firstname, lastname, email, username, password) => {
  //console.log(firstname, lastname, email, username, password);
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });
    const params = { firstname, lastname, email, username, password };
    return API.post('/createUser', params).then(resp => {
      if (resp.error) {
        console.log(resp);
        errorRegister(dispatch, resp.error);
      } else {
        successRegister(dispatch, resp);
      }
    }).catch((error) => {
      console.log(error);
      errorRegister(dispatch, error);
    });
  };
};

export const errorRegister = (dispatch, error) => {
  MessageBarManager.showAlert({
    title: 'Thông báo',
    message: error,
    alertType: 'warning'
  });
  dispatch({
    type: REGISTER_ERROR,
    payload: error
  });
};

export const successRegister = (dispatch, data) => {
  console.log(data.success);
  MessageBarManager.showAlert({
    title: 'Thông báo',
    message: data.success,
    alertType: 'success'
  });
  dispatch({
    type: REGISTER_SUCCESS,
    payload: data
  });
};
