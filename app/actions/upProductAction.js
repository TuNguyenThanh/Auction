import API from '../lib/api';
import {
  UP_PRODUCT_NAME_CHANGED, UP_PRODUCT_START_PRICE_CHANGED, UP_PRODUCT_CEIL_PRICE_CHANGED,
  UP_PRODUCT_DESCRIPTION_CHANGED, UP_PRODUCT_START_DATE_CHANGED
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
