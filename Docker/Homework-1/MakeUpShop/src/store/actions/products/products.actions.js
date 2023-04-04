import { PRODUCTS, UPDATERODUCTS } from '../products/products.actions-types';

export const products = () => ({
  type: PRODUCTS,
});

export const updateProducts = (arrayProduct) => ({
  type: UPDATERODUCTS,
  payload: arrayProduct,
});
