import { LOGIN, LOGOUT } from '../actions/user/user.actions-types';

export const initialState = false;
export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
  case LOGIN: 
    return !initialState;
  case LOGOUT:
    return initialState;
  default:
    return state; 
  }
};
