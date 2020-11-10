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
		<div className="container-card mb-1">
			<div className="header-card">
				<h3 className="user mb-3">@{user}</h3>
				<span className="title">{title}</span>
			</div>
			<div className="content-container mb-3">
				<p className="content mt-4">{content}</p>
			</div>
			<div className="container-buttons">
				<button
					className="standard-button"
					type="button"
					onClick={openDeletePost}
				>
					Eliminar
				</button>
				<button
					className="standard-button"
					type="button"
					onClick={HandleOpenModal}
				>
					Actualizar
				</button>
			</div>
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
