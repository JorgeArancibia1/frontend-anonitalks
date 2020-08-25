import React from "react";
import "../../styles/modal.css";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, updateModal } from "../../actions/modalAction";
import { useForm } from "../../hooks/useForm";
import {
  sendPost,
  postUpdate,
  postsStartLoading,
  cleanPost,
} from "../../actions/postAction";
import { Form } from "../../helpers/Form";

Modal.setAppElement("#root");

export const NewPostModal = () => {
  const dispatch = useDispatch();
  const { modalOpen, typeModal } = useSelector((state) => state.modal);
  const {post} = useSelector((state) => state.posts);

  console.log(post.title);
  console.log(post.content);

  const [formPostValues, handlePostInputChange, reset] = useForm({
    titlePost: '',
    contentPost: ''
  });

  const [formUpdateValues, handleUpdateInputChange] = useForm({
    titleUpdate: post.title,
    contentUpdate: post.content
  });

  const { titlePost, contentPost } = formPostValues;
  const { titleUpdate, contentUpdate } = formUpdateValues;

  const closeModalHandle = () => {
    dispatch(cleanPost());
    dispatch(closeModal());
    dispatch(updateModal(false));
    dispatch(postsStartLoading());
  };

  const addPost = (e) => {
    e.preventDefault();
    dispatch(sendPost(titlePost, contentPost));
    reset();
    dispatch(postsStartLoading());
  };

  const updatePost = (e) => {
    e.preventDefault();
    dispatch(postUpdate(titleUpdate, contentUpdate));
    // reset();
  };

  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModalHandle}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
        {typeModal ? (
          <Form
            actionF={updatePost}
            handleInputChange={handleUpdateInputChange}
            title={titleUpdate}
            content={contentUpdate}
            inputName="titleUpdate"
            inputContent="contentUpdate"
            textButton="Actualizar"
          />
        ) : (
          <Form
            actionF={addPost}
            handleInputChange={handlePostInputChange}
            title={titlePost}
            content={contentPost}
            inputName="titlePost"
            inputContent="contentPost"
            textButton="Postear"
          />
        )}
      </Modal>
    </>
  );
};
