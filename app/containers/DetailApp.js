import React, { Component } from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail';

class DetailApp extends Component {
  render() {
    return (
      <Detail {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.Home,
    token: state.Login.token
  };
};

export default connect(mapStateToProps)(DetailApp);
