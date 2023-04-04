import { combineReducers } from 'redux';
import { productsReducer } from './products.reducer';
import { orderFromReducer } from './orderForm.reducer';
import { authFormReducer } from './authForm.reducer';
import { registerFormReducer } from './registerFrom.reducer';
import { loginReducer } from './user.reducer';
import { cartReducer } from './cart.reducer';

export const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orderForm: orderFromReducer,
  authFrom: authFormReducer,
  user: loginReducer,
  registerForm: registerFormReducer,
}); 
