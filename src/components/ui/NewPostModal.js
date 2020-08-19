import React from "react";
import "../../styles/modal.css";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalAction";
import { useForm } from "../../hooks/useForm";
import { sendPost, postUpdate, cleanPost } from "../../actions/postAction";
import { Form } from "../../helpers/Form";

Modal.setAppElement("#root");

export const NewPostModal = () => {
  const dispatch = useDispatch();
  const { modalOpen, updateModal } = useSelector((state) => state.modal);
  // const {title, content} = useSelector((state) => state.posts.post )

  const [formPostValues, handlePostInputChange] = useForm({
    titleForm: "",
    contentForm: "",
  });

  const {titleForm, contentForm} = formPostValues;



  const closeModalHandle = () => {
    dispatch(closeModal());
  };

  const addPost = (e) => {
    e.preventDefault();
    dispatch(cleanPost())
    dispatch(sendPost(titleForm, contentForm));
  };

  const updatePost = (e) => {
    e.preventDefault();
    dispatch(postUpdate(titleForm, contentForm));
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
        {updateModal? 
          <Form 
          actionF={updatePost}
          value="Actualizar"
          handlePostInputChange={handlePostInputChange}
          titleForm={titleForm}
          contentForm={contentForm}
        />:
        <Form 
          actionF={addPost}
          value="Postear"
          handlePostInputChange={handlePostInputChange}
          titleForm={titleForm}
          contentForm={contentForm}
        />
        }
        
        {/* <form onSubmit={addPost} className="container">
          <h4>
            <strong>{user}</strong>
          </h4>
          <input
            className="inTitle"
            placeholder="  Título del post"
            type="text"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handlePostInputChange}
          />
          <br />
          <textarea
            type="text"
            className="text-content"
            placeholder="Escribe tu post aqui."
            name="content"
            autoComplete="off"
            value={content}
            onChange={handlePostInputChange}
          />
          <input type="submit" className="mgy center" value="Postear" />
        </form> */}
      </Modal>
    </div>
  );
};
