import { PRODUCTS, UPDATERODUCTS} from '../actions/products/products.actions-types';

export const initialState = [];

export const productsReducer = (state = initialState, action) => {  
  switch (action.type) {
  case PRODUCTS:
    return initialState;
  case UPDATERODUCTS:
    return action.payload;

  default:
    return state;
  }
};
