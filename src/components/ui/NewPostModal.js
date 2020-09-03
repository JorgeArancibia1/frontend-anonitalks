import React from "react";
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
import { sendForm } from "../../actions/formAction";

Modal.setAppElement("#root");

export const NewPostModal = () => {
  const dispatch = useDispatch();
  const { modalOpen, typeModal } = useSelector((state) => state.modal);
  const {post} = useSelector((state) => state.posts);
  const { form } = useSelector((state) => state);

  console.log(post);
  console.log(form);

  const {title, content} = post;

  // const [formState, setFormState] = useState({
  //   title: statePost.title,
  //   content: statePost.content
  // })

  // const {title, content} = formState;

  // const handleInputChange = ({ target }) => {

  //   setFormState({
  //     ...formState,
  //     [ target.name ]: target.value
  //   })
  // }

  const handleInputChange = ({target}) => {
    const {name, value} = target;
    dispatch(sendForm({
      ...post,
      ...form,
      [ name ]: value
    }));
  }

  const closeModalHandle = () => {
    dispatch(cleanPost());
    dispatch(closeModal());
    dispatch(updateModal(false));
    // dispatch(postsStartLoading());
  };

  const addPost = (e) => {
    e.preventDefault();
    
    dispatch(sendPost(form.title, form.content));
    
    // setFormState({
    //   ...formState,
    //   title: '',
    //   content: ''
    // })
  };

  const updatePost = (e) => {
    e.preventDefault();
    dispatch(postUpdate(form.title, form.content));
    // setFormState({
    //   ...formState,
    //   title: '',
    //   content: ''
    // })
    
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
            handleSubmit={updatePost}
            handleInputChange={handleInputChange}
            // title={title}
            // content={content}
            inputName="title"
            inputContent="content"
            textButton="Actualizar"
          />
        ) : (
          <Form
            handleSubmit={addPost}
            handleInputChange={handleInputChange}
            // title={title}
            // content={content}
            inputName="title"
            inputContent="content"
            textButton="Postear"
          />
        )}
      </Modal>
    </>
  );
};
