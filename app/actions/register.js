import { Actions } from 'react-native-router-flux';
import API from '../lib/api';
import {
  FIRST_NAME_CHANGED, LAST_NAME_CHANGED, REGISTER_EMAIL_CHANGED, REGISTER_PHONE_CHANGED,
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

export const changedPhone = (text) => {
  return {
    type: REGISTER_PHONE_CHANGED,
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

export const createAccount = (firstname, lastname, email, phone, username, password) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });
    const params = { firstname, lastname, email, phone, username, password };
    return API.post('/register', params).then(resp => {
      if (!resp.success) {
        errorRegister(dispatch, resp.error.id);
      } else {
        successRegister(dispatch, email);
      }
    }).catch((error) => {
      errorRegister(dispatch, error.message);
    });
  };
};

export const errorRegister = (dispatch, error) => {
  switch (error) {
    case 97:
      MessageBarManager.showAlert({
        title: 'Thông báo',
        message: 'Tên đăng nhập đã có người đăng ký',
        alertType: 'warning'
      });
      break;
    case 98:
      MessageBarManager.showAlert({
        title: 'Thông báo',
        message: 'Email đã có người đăng ký',
        alertType: 'warning'
      });
      break;
    case 99:
      MessageBarManager.showAlert({
        title: 'Thông báo',
        message: 'Số điện thoại đã có người đăng ký',
        alertType: 'warning'
      });
      break;
    default:
      MessageBarManager.showAlert({
        title: 'Thông báo',
        message: error,
        alertType: 'warning'
      });
  }
  dispatch({
    type: REGISTER_ERROR,
    payload: error
  });
};

export const successRegister = (dispatch, data) => {
  Actions.checkCode({ email: data });
  dispatch({
    type: REGISTER_SUCCESS,
    payload: data
  });
};
