import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../redux/actions/authAction';

export const Navbar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<div className="container-nav">
			<li className="nav-list">
				<ul>Home</ul>
				<ul>Chat</ul>
				<ul>Sobre la página</ul>
				<ul>Otros</ul>
			</li>
			<button type="button" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};
