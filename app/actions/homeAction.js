import SocketIOClient from 'socket.io-client';
import API from '../lib/api';
import {
  HOME_FETCH_DATA, AUCTION_PRODUCT
} from './types';

export const productFetchData = () => {
  this.socket = SocketIOClient('http://192.168.1.110:3000');
  return (dispatch) => {
    this.socket.on('SERVER_SEND_HOME', (data) => {
      //console.log(data);
      dispatch({ type: HOME_FETCH_DATA, payload: data });
    });
  };

  // return (dispatch) => {
  //   return API.get('/products').then(resp => {
  //     console.log(resp);
  //     dispatch({
  //       type: HOME_FETCH_DATA,
  //       payload: resp
  //     });
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // };
};

export const auctionProduct = (token, product) => {
  this.socket.emit('CLIEN_SEND_BID', { token, productId: product.id });
  return {
    type: AUCTION_PRODUCT
  };
};
