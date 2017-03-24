import {
  UP_PRODUCT_NAME_CHANGED, UP_PRODUCT_START_PRICE_CHANGED, UP_PRODUCT_CEIL_PRICE_CHANGED,
  UP_PRODUCT_DESCRIPTION_CHANGED, UP_PRODUCT_LOAD, UP_PRODUCT_LOAD_SUCCESS, UP_PRODUCT_LOAD_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  productName: '',
  productStartPrice: '',
  productCeilPrice: '',
  productDescription: '',
  loading: false,
  success: '',
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UP_PRODUCT_NAME_CHANGED:
      return { ...state, productName: action.payload };
    case UP_PRODUCT_START_PRICE_CHANGED:
      return { ...state, productStartPrice: action.payload };
    case UP_PRODUCT_CEIL_PRICE_CHANGED:
      return { ...state, productCeilPrice: action.payload };
    case UP_PRODUCT_DESCRIPTION_CHANGED:
      return { ...state, productDescription: action.payload };
    case UP_PRODUCT_LOAD:
      return { ...state, loading: true };
    case UP_PRODUCT_LOAD_SUCCESS:
      return { ...state, success: action.payload, error: '', loading: false };
    case UP_PRODUCT_LOAD_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
