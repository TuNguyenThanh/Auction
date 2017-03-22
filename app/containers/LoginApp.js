import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import {
  changedLoginUsername, changedLoginPassword, login
} from '../actions';

class LoginApp extends Component {
  constructor(props) {
    super(props);
    AsyncStorage.getItem('isLogin').then((value) => {
      if (value) {
        if (value !== '') {
          Actions.Main({ type: 'reset', tokenLogin: value });
        }
      }
    });
  }

  render() {
    return (
      <LoginForm {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.Login.username,
    password: state.Login.password,
    error: state.Login.error,
    loading: state.Login.loading,
    token: state.Login.token,
  };
};

export default connect(mapStateToProps, {
  changedLoginUsername, changedLoginPassword, login
})(LoginApp);
