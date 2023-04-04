import { SHOWFORMREGISTER, CLOSEFORMREGISTER } from '../actions/registerForm/registerForm.actions-types';

export const initialState = false;
export const registerFormReducer = (state = initialState, action) => {
  switch(action.type) {
  case SHOWFORMREGISTER:
    return !initialState;
  case CLOSEFORMREGISTER: 
    return initialState;
    
  default: 
    return state;
  }
};
