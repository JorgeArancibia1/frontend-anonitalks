import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendPost, postUpdate } from '../../redux/actions/postAction';

export const Form = ({ title, content, id = '', type }) => {
	const dispatch = useDispatch();

	const [_state, _setState] = useState({
		title: '',
		content: '',
		id: '',
	});

	useEffect(() => {
		_setState({ ..._state, title, content, id });
	}, []);

	const handleInputChange = ({ target }) => {
		_setState({
			..._state,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (type === 'create') dispatch(sendPost(_state));
		else if (type === 'update') dispatch(postUpdate(_state));
		// eslint-disable-next-line no-useless-return
		return;
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="container">
			<input
				className="inTitle"
				placeholder="Título del post"
				type="text"
				name="title"
				autoComplete="off"
				value={_state.title}
				onChange={(e) => handleInputChange(e)}
			/>
			<br />
			<textarea
				type="text"
				className="text-content"
				placeholder="Escribe tu post aqui."
				name="content"
				autoComplete="off"
				value={_state.content}
				onChange={(e) => handleInputChange(e)}
			/>
			<div className="container-flex-center container-button">
				<input
					type="submit"
					className="mgy center pointer"
					value={type === 'create' ? 'Postear' : 'Actualizar'}
				/>
			</div>
		</form>
	);
};
