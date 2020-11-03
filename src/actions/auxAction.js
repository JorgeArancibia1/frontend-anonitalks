
const modal = {
  OPEN: 'OPEN_MODAL',
  CLOSE: 'CLOSE_MODAL'
}


export const openModal = ({type='create',content={}}) => ({
  type: modal.OPEN,
  payload: {type, content}
});

export const closeModal = ()=>({
  type: modal.CLOSE,
})