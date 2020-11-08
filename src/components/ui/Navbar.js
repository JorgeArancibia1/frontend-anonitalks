import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../redux/actions/authAction';

export const Navbar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<div>
			<h1>Navbar</h1>
			<button type="button" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};
