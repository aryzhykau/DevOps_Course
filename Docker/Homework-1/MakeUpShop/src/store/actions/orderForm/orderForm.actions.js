import { SHOWORDERFORM, HIDEORDERFORM } from './orderForm.actions-types';

export const showOrderForm = () => ({
  type: SHOWORDERFORM,
});

export const hideOrderFrom = () => ({
  type: HIDEORDERFORM
});
