import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { closeModal, updateModal } from "./modalAction";

export const postsStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("posts");
      const body = await resp.json();

      const posts = body.posts;

      return dispatch({
        type: types.postsLoaded,
        payload: posts,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// const postsLoaded = (posts) => ({
//   type: types.postsLoaded,
//   payload: posts,
// });

export const sendPost = (title = "", content = "") => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("posts", { title, content }, "POST");
      const body = await resp.json();

      const { post } = body;
      // console.log(post);

      if (body.ok) {
        dispatch({
          type: types.sendPost,
          payload: post,
        });
        Swal.fire("Listo!", "Post Agregado!", "success");
        dispatch(closeModal());
        dispatch(postsStartLoading());
      } else {
        Swal.fire("Error", body.errors.title.msg, "error");
        Swal.fire("Error", body.errors.content.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postDelete = (id) => {
  return async (dispatch) => {
    // console.log(id);
    try {
      const resp = await fetchConToken(`posts/${id}`, {}, "DELETE");
      const body = await resp.json();

      if (body.ok) {
        dispatch({ type: types.deletePost });
        Swal.fire("Listo!", "Post Borrado!", "success");
        dispatch(postsStartLoading());
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUpdate = (title = "", content = "") => {
  return async (dispatch, getState) => {

    const id  = getState().posts.post.id;
    
    try {
      const resp = await fetchConToken(`posts/${id}`, {title, content}, "PUT");
      const body = await resp.json();

      const post = {
        title,
        content,
        id
      }

      if (body.ok) {
        dispatch({
          type: types.updatePost,
          payload: post,
        });
        Swal.fire("Listo!", "Post Actualizado!", "success");
        dispatch(closeModal());
        dispatch(postsStartLoading());
        cleanPost();
        dispatch(updateModal(false));
      } else {
        Swal.fire("Error", body.msg, "error");
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setPostId = (id, title, content) => ({
  type: types.postId,
  payload: {
    id,
    title,
    content
  }
});

  export const cleanPost = () => ({
    type: types.cleanPost,
    payload: {
      title: '',
      content:''
    }
   });