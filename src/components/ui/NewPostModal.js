import React from "react";
import "../../styles/modal.css";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalAction";
import { Form } from "../../helpers/Form";

Modal.setAppElement("#root");

export const NewPostModal = () => {
  const dispatch = useDispatch();
  const { openModal, type, selectedPost } = useSelector(({ modal }) => modal);

  const handleCloseModal= () => dispatch(closeModal())

  return (
    <>
      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
      >
        {type === 'create' ? (
          <Form
            title={selectedPost.title}
            content={selectedPost.content}
            type="create"
          />
        ) : (
          <Form
            title={selectedPost.title}
            content={selectedPost.content}
            id={selectedPost.id}
            type="update"
          />
        )}
        <button onClick={handleCloseModal}>Cerrar modal</button> 
      </Modal>
    </>
  );
};




