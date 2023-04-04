import { ADDTOCART, REMOVEFROMCART, CLEARCART } from '../actions/cart/cart.actions-types';

export const initialState = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADDTOCART: {
    const updatedCart = [...state, action.payload];
    return updatedCart;
  }
  case REMOVEFROMCART: {
    const deletedProduct = state.filter((item, index) => index !== action.payload);
    return deletedProduct;
  }  
  case CLEARCART:
    return initialState;
  default:
    return state;
  }
};
