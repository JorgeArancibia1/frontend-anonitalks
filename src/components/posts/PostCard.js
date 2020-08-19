import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { postDelete, setPostId } from '../../actions/postAction'
import { openModal, updateModal } from "../../actions/modalAction";

export const PostCard = ({user, title, content, id}) => {
  
const dispatch = useDispatch()

// console.log(id);

  const openDeletePost = () => {
    dispatch(postDelete(id));
    // console.log(id);
  }

  const openUpdatePost = () => {
    dispatch(updateModal(true));
    dispatch(openModal());
    dispatch(setPostId(id, title, content));
    // console.log(id);
  }
  
  return (
    <div>
      <button onClick={openDeletePost}>Eliminar</button>
      <button onClick={openUpdatePost}>Actualizar</button>
      <h3>{ user }</h3>
      <span>{ title }</span>
      <p>
        { content }
      </p>
    </div>
  );
};

PostCard.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

PostCard.defaultProps = {
  user: 'User',
  title: 'Title',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi porro hic quaerat, doloribus possimus fugit sunt ex obcaecati dolores, quidem veritatis repellendus velit dolor! Ea tempora asperiores consectetur nulla!'
}