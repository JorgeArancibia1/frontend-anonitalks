import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../redux/actions/authAction';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formLoginValues, handleLoginInputChange] = useForm({
		lemail: 'jorge@gmail.com',
		lpassword: '123456',
	});

	const { lemail, lpassword } = formLoginValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLogin(lemail, lpassword));
	};

	return (
		<div className="container-home">
			<div className="container-title-form">
				<img
					className="title-anonitalks"
					src="https://res.cloudinary.com/initial-cloud/image/upload/c_scale,h_48,w_225/v1604950450/anonitalks_ro0daj.jpg"
					alt=""
				/>
				<form className="form-home" onSubmit={handleLogin}>
					<h2 className="title-login">Login</h2>
					<br />
					<input
						className="input-name"
						type="text"
						placeholder="Email"
						name="lemail"
						autoComplete="off"
						value={lemail}
						onChange={handleLoginInputChange}
					/>
					<br />
					<input
						className="input-password"
						type="password"
						placeholder="Password"
						name="lpassword"
						autoComplete="off"
						value={lpassword}
						onChange={handleLoginInputChange}
					/>
					<br />
					<input className="login-button" type="submit" value="Entrar" />
					<br />
					<Link to="/signup">Sign up</Link>
				</form>
			</div>
		</div>
	);
};
