import SocketIOClient from 'socket.io-client';
import { DOMAIN_NAME } from '../store/APIConfig';
import {
  HOME_FETCH_DATA, AUCTION_PRODUCT
} from './types';

export const productFetchData = () => {
  this.socket = SocketIOClient(DOMAIN_NAME);
  return (dispatch) => {
    this.socket.on('SERVER_SEND_HOME', (data) => {
      dispatch({ type: HOME_FETCH_DATA, payload: data });
    });
  };
};

export const auctionProduct = (token, product) => {
  this.socket.emit('CLIEN_SEND_BID', { token, productId: product.id });
  return {
    type: AUCTION_PRODUCT
  };
};
