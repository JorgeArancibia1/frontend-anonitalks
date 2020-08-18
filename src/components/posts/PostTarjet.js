import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { postDelete } from '../../actions/postAction'

export const PostTarjet = ({user, title, content, id}) => {
  
const dispatch = useDispatch()

  const deletePost = () => {
    dispatch(postDelete(id));
  }

  const updatePost = () => {
    console.log('post actualizado');
  }
  
  return (
    <div>
      <button onClick={deletePost}>Eliminar</button>
      <button onClick={updatePost}>Actualizar</button>
      <h3>{ user }</h3>
      <span>{ title }</span>
      <p>
        { content }
      </p>
    </div>
  );
};

PostTarjet.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

PostTarjet.defaultProps = {
  user: 'User',
  title: 'Title',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi porro hic quaerat, doloribus possimus fugit sunt ex obcaecati dolores, quidem veritatis repellendus velit dolor! Ea tempora asperiores consectetur nulla!'
}