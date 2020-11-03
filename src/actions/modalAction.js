import { types } from '../types/types';

// export const openModal = () => ({ type: types.openModal });
// export const closeModal = () => ({ type: types.closeModal });
// export const updateModal = (boolean) => ({ 
//   type: types.updateModal,
//   payload: boolean
//  });

export const openModal = ({type='create',content={}}) => ({
  type: types.openModal,
  payload: {type, content}
});

export const closeModal = ()=>({
  type: types.closeModal,
})