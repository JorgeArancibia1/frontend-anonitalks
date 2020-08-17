import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const postsStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("posts");
      const body = await resp.json();

      // console.log(body);

      const posts = body.posts;

      // console.log(posts);
      dispatch(postsLoaded(posts));
    } catch (error) {
      console.log(error);
    }
  };
};

const postsLoaded = (posts) => ({
  type: types.postsLoaded,
  payload: posts,
});


export const sendPost = (post) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("posts", {post}, 'POST');
      const body = await resp.json();

      // console.log(body);

      const posts = body.posts;

      // console.log(posts);
      dispatch(postsLoaded(posts));
    } catch (error) {
      console.log(error);
    }
  };
};