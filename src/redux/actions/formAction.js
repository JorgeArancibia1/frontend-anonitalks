import { types } from '../types/types';


export const sendForm = (form) => ({
  type: types.sendForm,
  payload: form
});

