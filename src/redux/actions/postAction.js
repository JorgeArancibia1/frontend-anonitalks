import { fetchConToken } from "../../helpers/fetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { closeModal } from "./modalAction";

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

export const sendPost = (ctx) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("posts", { title: ctx.title, content: ctx.content }, "POST");
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
        dispatch({ type: types.deletePost, payload: id });
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

export const postUpdate = (ctx) => {
  return async (dispatch, getState) => {

    try {
      const resp = await fetchConToken(`posts/${ctx.id}`, {title: ctx.title, content: ctx.content, id: ctx.id}, "PUT");
      const body = await resp.json();

      const post = {
        title: ctx.title,
        content: ctx.content,
        id: ctx.id
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
        //dispatch(updateModal(false));
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