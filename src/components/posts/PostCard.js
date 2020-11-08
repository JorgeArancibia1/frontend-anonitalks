import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postDelete } from '../../redux/actions/postAction';
import { openModal } from '../../redux/actions/modalAction';

export const PostCard = ({ user, title, content, id }) => {
	const dispatch = useDispatch();

	const openDeletePost = () => {
		dispatch(postDelete(id));
	};

	const HandleOpenModal = () => {
		dispatch(openModal({ type: 'update', content: { id, title, content } }));
	};
	return (
		<div>
			<button type="button" onClick={openDeletePost}>
				Eliminar
			</button>
			<button type="button" onClick={HandleOpenModal}>
				Actualizar
			</button>
			<h3>{user}</h3>
			<span>{title}</span>
			<p>{content}</p>
		</div>
	);
};

PostCard.propTypes = {
	user: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

PostCard.defaultProps = {
	user: 'User',
	title: 'Title',
	content: 'content',
};
