import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import {
  productFetchData
} from '../actions';

class HomeApp extends Component {
  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.Home
  };
};

export default connect(mapStateToProps, { productFetchData })(HomeApp);
