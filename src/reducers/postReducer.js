import { types } from "../types/types";

const initialState = {
  posts: [],
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
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== state.posts.id)
      };

    default:
      return state;
  }
};
