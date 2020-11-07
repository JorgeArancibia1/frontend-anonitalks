/* eslint-disable import/prefer-default-export */
import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { closeModal } from "../../redux/actions/modalAction";
import { Form } from "../posts/Form";

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
        className="modal text-right"
        overlayClassName="modal-fondo"
      >
        <IconButton aria-label="delete" onClick={handleCloseModal}>
          <CloseIcon fontSize="small"/>
        </IconButton>
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
      </Modal>
    </>
  );
};




