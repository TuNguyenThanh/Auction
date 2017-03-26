import RNFetchBlob from 'react-native-fetch-blob';
import { DOMAIN_NAME } from '../store/APIConfig';
import {
  UP_PRODUCT_NAME_CHANGED, UP_PRODUCT_START_PRICE_CHANGED, UP_PRODUCT_CEIL_PRICE_CHANGED,
  UP_PRODUCT_DESCRIPTION_CHANGED, UP_PRODUCT_LOAD,
  UP_PRODUCT_LOAD_SUCCESS, UP_PRODUCT_LOAD_ERROR
} from './types';


export const changedUpProductName = (text) => {
  return {
    type: UP_PRODUCT_NAME_CHANGED,
    payload: text
  };
};

export const changedUpProductStartPrice = (text) => {
  return {
    type: UP_PRODUCT_START_PRICE_CHANGED,
    payload: text
  };
};

export const changedUpProductCeilPrice = (text) => {
  return {
    type: UP_PRODUCT_CEIL_PRICE_CHANGED,
    payload: text
  };
};

export const changedUpProductDescription = (text) => {
  return {
    type: UP_PRODUCT_DESCRIPTION_CHANGED,
    payload: text
  };
};

export const uploadProduct = (token, image, productName, productStartPrice, productCeilPrice, productDescription, duration, bidAmount, categoryId) => {
  return (dispatch) => {
    dispatch({ type: UP_PRODUCT_LOAD });
    const params = {
      productName,
      productStartPrice,
      productCeilPrice,
      productDescription,
      duration,
      bidAmount,
      token,
      categoryId
    };

    const nameImage = `image${Math.floor(Date.now() / 1000)}`;
    return RNFetchBlob.fetch('POST', `${DOMAIN_NAME}/postProduct`, {
      Authorization: 'ThanhTu',
      otherHeader: 'foo',
      'Content-Type': 'multipart/form-data',
    }, [
      // part file from storage
      { name: nameImage, filename: nameImage + '.png', type: 'image/png', data: RNFetchBlob.wrap(image) },
      { name: 'info', data: JSON.stringify(params) }
    ]).then((resp) => {
      console.log(resp);
        if (resp.success === false) {
          uploadError(dispatch, resp.error.id);
        } else {
          uploadSuccess(dispatch, resp.token);
        }
    }).catch((error) => {
      uploadError(dispatch, error.message);
    });
  };
};


export const uploadSuccess = (dispatch, success) => {
  console.log('success');
  dispatch({
    type: UP_PRODUCT_LOAD_SUCCESS,
    payload: success
  });
};

export const uploadError = (dispatch, error) => {
  dispatch({
    type: UP_PRODUCT_LOAD_ERROR,
    payload: error
  });
};
