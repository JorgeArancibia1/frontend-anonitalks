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

export const NewPostModal = React.memo(() => {
  const dispatch = useDispatch();
  const { modalOpen, typeModal } = useSelector((state) => state.modal);
  const state = useSelector((state) => state.posts);

  // console.log(state.post);
  // console.log(state.post.title);
  // console.log(state.post.content);
  // console.log("Modal");
  // console.log(content)

  let title = "";
  let content = "";
  
  if (!typeModal) {
    title = ""
    content = ""
  } else {
    title = state.post.title
    content = state.post.content
    console.log(title);
  }

  // console.log(state.post.content);
  const [formPostValues, handlePostInputChange, reset] = useForm({
    titlePost: title,
    contentPost: content,
  });

  const [formUpdateValues, handleUpdateInputChange] = useForm({
    titleUpdate: title,
    contentUpdate: content,
  });

  const { titlePost, contentPost } = formPostValues;
  const { titleUpdate, contentUpdate } = formUpdateValues;

  const closeModalHandle = () => {
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
  };

  return (
    <div>
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
            // value="Actualizar"
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
            // value="Postear"
            handleInputChange={handlePostInputChange}
            title={titlePost}
            content={contentPost}
            inputName="titlePost"
            inputContent="contentPost"
            textButton="Postear"
          />
        )}
      </Modal>
    </div>
  );
});
