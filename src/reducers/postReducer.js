import { types } from "../types/types";

const initialState = {
  posts: [],
  post: {}
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

      case types.postUpdated:
        return {
            ...state,
            posts: state.posts.map(
                p => ( p.id === action.payload.id ) ? action.payload : p
            )
        }

      case types.postId:
        return {
          ...state,
          post: action.payload
        }

        case types.cleanPost:
          return {
            post: {}
          }

    default:
      return state;
  }
};
