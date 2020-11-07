import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { postDelete } from '../../redux/actions/postAction'
import { openModal } from "../../redux/actions/modalAction";
// import { openModal } from "../../actions/auxAction";

export const PostCard = ({user, title, content, id}) => {
  
const dispatch = useDispatch()

  const openDeletePost = () => {
    dispatch(postDelete(id));
  }
  
  const HandleOpenModal=()=> {
    dispatch(openModal({type: 'update', content:{id, title, content}}))
  }
  return (
    <div>
      <button onClick={openDeletePost}>Eliminar</button>
      <button onClick={HandleOpenModal}>Actualizar</button>
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