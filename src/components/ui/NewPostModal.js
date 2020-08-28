import React, { useState } from "react";
import "../../styles/modal.css";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, updateModal } from "../../actions/modalAction";
import {
  sendPost,
  postUpdate,
  cleanPost,
} from "../../actions/postAction";
import { Form } from "../../helpers/Form";

Modal.setAppElement("#root");

export const NewPostModal = () => {
  const dispatch = useDispatch();
  const { modalOpen, typeModal } = useSelector((state) => state.modal);
  const {post} = useSelector((state) => state.posts);

  const [formState, setFormState] = useState({
    title: '',
    content: ''
  })

  const {title, content} = formState;

  const handleInputChange = ({ target }) => {

    setFormState({
      ...formState,
      [ target.name ]: target.value
    })
  }

  const closeModalHandle = () => {
    dispatch(cleanPost());
    dispatch(closeModal());
    dispatch(updateModal(false));
    // dispatch(postsStartLoading());
  };

  const addPost = (e) => {
    e.preventDefault();
    dispatch(sendPost(title, content));
    
    setFormState({
      ...formState,
      title: '',
      content: ''
    })
  };

  const updatePost = (e) => {
    e.preventDefault();
    dispatch(postUpdate(title, content));
    setFormState({
      ...formState,
      title: '',
      content: ''
    })
    
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
            handleInputChange={handleInputChange}
            title={title}
            content={content}
            inputName="title"
            inputContent="content"
            textButton="Actualizar"
          />
        ) : (
          <Form
            actionF={addPost}
            handleInputChange={handleInputChange}
            title={title}
            content={content}
            inputName="title"
            inputContent="content"
            textButton="Postear"
          />
        )}
      </Modal>
    </>
  );
};
