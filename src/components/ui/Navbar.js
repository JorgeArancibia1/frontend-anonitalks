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
			<li className="nav-list pt-2">
				<ul>Home</ul>
				<ul>Chat</ul>
				<ul>Sobre la página</ul>
				<button className="button-out" type="button" onClick={handleLogout}>
					Logout
				</button>
			</li>
		</div>
	);
};
