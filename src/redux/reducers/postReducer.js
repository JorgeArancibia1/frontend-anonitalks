import { types } from "../types/types";

const initialState = {
  posts: [],
  post: {
    title: '',
    content: ''
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
       const updatedPost = state.posts.filter((post) => post.id !== action.payload)
      return {
        ...state,
        posts: updatedPost,
      };

    case types.updatePost:
      // const arrayUpdated = updatedArray(array, id)
      // Encontrar el index y obtienes el objeto
      // Actualizas el objeto
      // Reemplazar en el index el nuevo obj en el array
      // Guardas el array actualizado
      // lodash
      return {
        ...state
        // posts: state.posts.map((p) =>
        //   p.id === action.payload.id ? action.payload : p
        // ),
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
