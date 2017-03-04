import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import {
  changedLoginUsername, changedLoginPassword, login
} from '../actions';

class LoginApp extends Component {
  render() {
    console.log(this.props.user.username);
    if (this.props.user.username) {
      Actions.Main({ type: 'reset' });
    }
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
    user: state.Login.user,
  };
};

export default connect(mapStateToProps, {
  changedLoginUsername, changedLoginPassword, login
})(LoginApp);
