import { types } from "../types/types";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case types.postsLoaded:
      return {
        ...state,
        posts: action.payload,
      };

    case types.sendPost:
      return {
        ...state.posts,
        posts: [
          ...state.posts,
          action.payload
      ]
      };

    default:
      return state;
  }
};
