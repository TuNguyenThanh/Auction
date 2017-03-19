import SocketIOClient from 'socket.io-client';
import { DOMAIN_NAME } from '../store/APIConfig';
import {
  DETAIL_FETCH_PRODUCT_BY_ID
} from './types';

export const productFetchDataById = () => {
  this.socket = SocketIOClient(DOMAIN_NAME);
  return (dispatch) => {
    this.socket.on('SERVER_SEND_HOME', (data) => {
      dispatch({ type: DETAIL_FETCH_PRODUCT_BY_ID, payload: data });
    });
  };
};
