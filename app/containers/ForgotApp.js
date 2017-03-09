import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForgotForm from '../components/ForgotForm';
import { changedForgotPassword, forgotPassword } from '../actions';

class ForgotApp extends Component {
  render() {
    return (
      <ForgotForm {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.Forgot.email,
    loading: state.Forgot.loading,
    mess: state.Forgot.mess,
    error: state.Forgot.error,
  };
};

export default connect(mapStateToProps, { changedForgotPassword, forgotPassword })(ForgotApp);
