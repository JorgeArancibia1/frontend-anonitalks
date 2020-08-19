import { types } from '../types/types';



export const openModal = () => ({ type: types.openModal });
export const closeModal = () => ({ type: types.closeModal });
export const updateModal = (boolean) => ({ 
  type: types.updateModal,
  payload: boolean
 });