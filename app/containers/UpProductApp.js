import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpProduct from '../components/UpProduct';
import {
  changedUpProductName, changedUpProductStartPrice, changedUpProductCeilPrice,
  changedUpProductDescription
} from '../actions';

class UpProductApp extends Component {
  render() {
    return (
      <UpProduct {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productName: state.UpProduct.productName,
    productStartPrice: state.UpProduct.productStartPrice,
    productCeilPrice: state.UpProduct.productCeilPrice,
    productDescription: state.UpProduct.productDescription,
  };
};

export default connect(mapStateToProps, {
  changedUpProductName,
  changedUpProductStartPrice,
  changedUpProductCeilPrice,
  changedUpProductDescription,
})(UpProductApp);
