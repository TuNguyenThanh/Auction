import SocketIOClient from 'socket.io-client';
import API from '../lib/api';
import {
  HOME_FETCH_DATA
} from './types';

export const productFetchData = () => {
  this.socket = SocketIOClient('http://localhost:3000');
  return (dispatch) => {
    this.socket.on('SERVER_SEND_HOME', function(data) {
      dispatch({ type: HOME_FETCH_DATA, payload: data });
    });
  };
  // return (dispatch) => {
  //   return API.get('/products').then(resp => {
  //     //console.log(resp);
  //     dispatch({
  //       type: HOME_FETCH_DATA,
  //       payload: resp
  //     });
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // };
};
