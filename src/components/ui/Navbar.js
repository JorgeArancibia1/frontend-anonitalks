import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../redux/actions/authAction';

export const Navbar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<div className="container-nav">
			<li className="nav-list pt-2">
				<ul><Link to="/"> Home </Link></ul>
				<ul><strike> Chat </strike></ul>
				<ul className="min-about">
					<Link to="/about">
						Sobre la página
					</Link>
				</ul>
				<button className="buttonout" type="button" onClick={handleLogout}>
					Logout
				</button>
			</li>
		</div>
	);
};
