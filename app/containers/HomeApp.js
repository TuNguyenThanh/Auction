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
  return {
    product: state.Home.data,
    loading: state.Home.loading,
    error: state.Home.error,
    token: state.Login.token,
    id: state.Login.idUser,
    balance: state.Login.balance
  };
};

export default connect(mapStateToProps, { productFetchData, auctionProduct })(HomeApp);
