import { SHOWFORMAUTH, CLOSEFORMAUTH } from './authForm.actions-types';

export const showFormAuth = () => ({
  type: SHOWFORMAUTH
});

export const closeFormAuth = () => ({
  type: CLOSEFORMAUTH
});
