import {
  UP_PRODUCT_NAME_CHANGED, UP_PRODUCT_START_PRICE_CHANGED, UP_PRODUCT_CEIL_PRICE_CHANGED,
  UP_PRODUCT_DESCRIPTION_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  productName: '',
  productStartPrice: '',
  productCeilPrice: '',
  productDescription: '',
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
    default:
      return state;
  }
};
