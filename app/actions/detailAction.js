import SocketIOClient from 'socket.io-client';
import {
  DETAIL_FETCH_PRODUCT_BY_ID
} from './types';

export const productFetchDataById = () => {
  this.socket = SocketIOClient('http://localhost:3000');
  return (dispatch) => {
    this.socket.on('SERVER_SEND_HOME', function(data) {
      dispatch({ type: DETAIL_FETCH_PRODUCT_BY_ID, payload: data });
    });
  };
};
