import React from "react";
import "../../styles/modal.css";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalAction";
import { useForm } from "../../hooks/useForm";
import { sendPost } from "../../actions/postAction";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//   }
// };

Modal.setAppElement("#root");

export const NewPostModal = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.modal);
  const { user } = useSelector((state) => state.posts);

  const [formPostValues, handlePostInputChange] = useForm({
    title: "",
    content: "",
  });

  const {title, content} = formPostValues;

  const closeModalHandle = () => {
    dispatch(closeModal());
  };

  const addPost = (e) => {
    e.preventDefault();
    dispatch(sendPost(title, content));
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalHandle}
        // style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <form onSubmit={addPost} className="container">
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
        </form>
      </Modal>
    </div>
  );
};
