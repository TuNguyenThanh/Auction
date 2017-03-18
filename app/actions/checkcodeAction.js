import { Actions } from 'react-native-router-flux';
import API from '../lib/api';
import {
  CHECK_CODE_CHANGED, CHECK_CODE_LOAD, CHECK_CODE_SUCCESS, CHECK_CODE_ERROR
} from './types';

const MessageBarManager = require('react-native-message-bar').MessageBarManager;

export const changedCode = (text) => {
  return {
    type: CHECK_CODE_CHANGED,
    payload: text
  };
};

export const checkCode = (code, email) => {
  console.log(code, email);
  return (dispatch) => {
    dispatch({ type: CHECK_CODE_LOAD });
    const params = { code, email };
    return API.post('/register', params).then(resp => {
      if (resp.success === false) {
        checkCodeError(dispatch, resp.error.id);
      } else {
        checkCodeSuccess(dispatch, resp.success);
      }
    }).catch((error) => {
      checkCodeError(dispatch, error);
    });
  };
};

export const checkCodeSuccess = (dispatch, mess) => {
  MessageBarManager.showAlert({
    title: 'Thông báo',
    message: 'Thành công, tài khoản đã được kích hoạt',
    alertType: 'success'
  });
  Actions.loginForm({ type: 'reset' });
  dispatch({
    type: CHECK_CODE_SUCCESS,
    payload: mess
  });
};

export const checkCodeError = (dispatch, error) => {
  if (error === 101) {
    MessageBarManager.showAlert({
      title: 'Thông báo',
      message: 'Code không tồn tại',
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
    type: CHECK_CODE_ERROR,
    payload: error
  });
};
