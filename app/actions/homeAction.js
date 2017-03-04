import API from '../lib/api';
import {
  HOME_FETCH_DATA
} from './types';

export const productFetchData = () => {
  return (dispatch) => {
    return API.get('/product/1').then(resp => {
      //console.log(resp);
      dispatch({
        type: HOME_FETCH_DATA,
        payload: resp
      });
    }).catch((error) => {
      console.log(error);
    });
  };
};
