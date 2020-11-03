import React, { useState } from "react";
import "../../styles/modal.css";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalAction";
import { closeModal as closeAuxModal } from "../../actions/auxAction";
import {
  sendPost,
  postUpdate,
} from "../../actions/postAction";
import { Form } from "../../helpers/Form";

Modal.setAppElement("#root");

export const NewPostModal = () => {
  const dispatch = useDispatch();
  // const { modalOpen, typeModal } = useSelector((state) => state.modal);
  // const { openModal, type, selectedPost } = useSelector(({auxState}) => auxState);
  const { openModal, type, selectedPost } = useSelector(({modal}) => modal);

  // const { form } = useSelector((state) => state);
  // const { post } = useSelector((state) => state.posts);

  // console.log("Este es type ==== ",type, openModal);

  const handleCloseModal= () => dispatch(closeModal())
  // const {title, content} = post;
  // const {title, content} = formState;

    const [datos, setDatos] = useState({
      title: '',
      content: ''
    })

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
    console.log("e.target.value =", e.target.value)
  }

  const [up, setUp] = useState({
    title: '',
    content: ''
  })

  const handleInputChangeUp = (e) => {
    setUp({
      ...up,
      [e.target.name] : e.target.value
    })
    console.log("e.target.value =", e.target.value)
  }

  // const handleInputChange = ({target}) => {
  //   const {name, value} = target;
  //   dispatch(sendForm({
  //     ...form,
  //     [ name ]: value
  //   }));
  // }

  const addPost = (e) => {
    e.preventDefault();
    
    dispatch(sendPost(datos.title, datos.content));
  };

  const updatePost = (e) => {
    e.preventDefault();
    dispatch(postUpdate(up.title, up.content));    
  };


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
          handleSubmit={addPost}
          handleInputChange={handleInputChange}
          title={selectedPost.title}
          content={selectedPost.content}
          textButton="Postear"
        />
        ) : (
          <Form
            handleSubmit={updatePost}
            handleInputChange={handleInputChangeUp}
            title={selectedPost.title}
            content={selectedPost.content}
            textButton="Actualizar"
          />
        )}
        <button onClick={handleCloseModal}>Cerrar modal</button> 
      </Modal>
    </>
  );
};




