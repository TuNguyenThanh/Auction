import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

import {
  productFetchData, auctionProduct
} from '../actions';

class HomeApp extends Component {
  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.Login.token);
  return {
    product: state.Home,
    token: state.Login.token
  };
};

export default connect(mapStateToProps, { productFetchData, auctionProduct })(HomeApp);
