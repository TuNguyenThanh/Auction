import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckCode from '../components/CheckCode';
import { changedCode, checkCode } from '../actions';

class CheckCodeApp extends Component {
  render() {
    return (
      <CheckCode {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    code: state.Code.code,
    loading: state.Code.loading
  };
};

export default connect(mapStateToProps, { changedCode, checkCode })(CheckCodeApp);
