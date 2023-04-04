import { SHOWFORMAUTH, CLOSEFORMAUTH } from '../actions/authForm/authForm.actions-types';

export const initialState = false;
export const authFormReducer = (state = initialState, action) => {
  switch(action.type) {
  case SHOWFORMAUTH:
    return !initialState;
  case CLOSEFORMAUTH: 
    return initialState;
    
  default: 
    return state;
  }
};
