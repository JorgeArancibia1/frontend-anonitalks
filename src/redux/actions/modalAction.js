import { types } from '../types/types';

export const openModal = ({
	type = 'create',
	content = { title: '', content: '' },
}) => ({
	type: types.openModal,
	payload: { type, content },
});

export const closeModal = () => ({
	type: types.closeModal,
});
