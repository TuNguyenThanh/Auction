import SocketIOClient from 'socket.io-client';
import { DOMAIN_NAME } from '../store/APIConfig';
import {
  HOME_FETCH_DATA, AUCTION_PRODUCT, HOME_FETCH_DATA_SUCCESS, HOME_FETCH_DATA_ERROR
} from './types';

export const productFetchData = () => {
  this.socket = SocketIOClient(DOMAIN_NAME);
  return (dispatch) => {
    dispatch({ type: HOME_FETCH_DATA });
    this.socket.on('SERVER_SEND_HOME', (data) => {
      if (data) {
        dispatch({ type: HOME_FETCH_DATA_SUCCESS, payload: data });
      } else {
        dispatch({ type: HOME_FETCH_DATA_ERROR, payload: 'Not data' });
      }
    });
  };
};

export const auctionProduct = (token, product) => {
  this.socket.emit('CLIEN_SEND_BID', { token, productId: product.id });
  return {
    type: AUCTION_PRODUCT
  };
};
