import { types } from '../types/types';
import { updateObject } from '../../helpers/updateObject';

const initialState = {
	posts: [],
	post: {
		id: '',
		title: '',
		content: '',
	},
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.postsLoaded:
			return {
				...state,
				posts: action.payload,
			};

		case types.sendPost:
			return {
				...state.posts,
				posts: [...state.posts, action.payload],
			};

		case types.deletePost:
			const updatedPost = state.posts.filter((post) => {
				post.id !== action.payload;
			});
			return {
				...state,
				posts: updatedPost,
			};

		case types.updatePost:
			return {
				...state,
				posts: updateObject(state, action.payload),
			};

		case types.postId:
			return {
				...state,
				post: action.payload,
			};

		case types.cleanPost:
			return {
				...state,
				post: action.payload,
			};

		default:
			return state;
	}
};
