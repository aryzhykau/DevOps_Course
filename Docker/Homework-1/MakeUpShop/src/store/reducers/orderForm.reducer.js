import { SHOWORDERFORM, HIDEORDERFORM } from '../actions/orderForm/orderForm.actions-types';

export const initialState = false;
export const orderFromReducer = (state = initialState, action) => {
  switch(action.type) {
  case SHOWORDERFORM: 
    return !initialState;
  case HIDEORDERFORM:
    return initialState;

  default: 
    return state;  
  }
};
