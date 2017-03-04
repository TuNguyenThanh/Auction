import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changedFirstName, changedLastName, changedEmail,
  changedUsername, changedPassword, changedRePassword,
  createAccount
} from '../actions';
import RegisterForm from '../components/RegisterForm';

class RegisterApp extends Component {
  render() {
    return (
      <RegisterForm {...this.props} />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    firstname: state.Register.firstname,
    lastname: state.Register.lastname,
    email: state.Register.email,
    username: state.Register.username,
    password: state.Register.password,
    repassword: state.Register.repassword,
    error: state.Register.error,
    data: state.Register.data,
    loading: state.Register.loading,
  };
};

export default connect(mapStateToProps, {
  changedFirstName,
  changedLastName,
  changedEmail,
  changedUsername,
  changedPassword,
  changedRePassword,
  createAccount
})(RegisterApp);
