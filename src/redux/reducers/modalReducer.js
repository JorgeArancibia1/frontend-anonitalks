import { types } from '../types/types';

const initialState = {
	selectedPost: {},
	openModal: false,
	type: 'create',
};

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.openModal:
			return {
				...state,
				selectedPost: action.payload.content,
				type: action.payload.type,
				openModal: true,
			};

		case types.closeModal:
			return {
				...state,
				selectedPost: {},
				type: 'create',
				openModal: false,
			};

		default:
			return state;
	}
};
