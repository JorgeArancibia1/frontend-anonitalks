import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../redux/actions/authAction';

export const RegisterScreen = () => {
	const dispatch = useDispatch();

	const [formRegisterValues, handleRegisterInputChange] = useForm({
		rname: 'jorge',
		remail: 'jorge@gmail.com',
		rpassword1: '123456',
		rpassword2: '123456',
	});

	const { rname, remail, rpassword1, rpassword2 } = formRegisterValues;

	const handleRegister = (e) => {
		e.preventDefault();

		if (rpassword1 !== rpassword2) {
			return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
		}

		dispatch(startRegister(rname, remail, rpassword1));
	};

	return (
		<div className="container-home">
			<div className="container-title-form">
				<img
					className="title-anonitalks"
					src="https://res.cloudinary.com/initial-cloud/image/upload/c_scale,h_48,w_225/v1604950450/anonitalks_ro0daj.jpg"
					alt=""
				/>
				<form className="form-home" onSubmit={handleRegister}>
					<h2 className="title-login">Register</h2>
					<input
						type="text"
						placeholder="Name"
						name="rname"
						className=""
						autoComplete="off"
						value={rname}
						onChange={handleRegisterInputChange}
					/>

					<input
						type="text"
						placeholder="Email"
						name="remail"
						className=""
						autoComplete="off"
						value={remail}
						onChange={handleRegisterInputChange}
					/>

					<input
						type="password"
						placeholder="Password"
						name="rpassword1"
						className=""
						autoComplete="off"
						value={rpassword1}
						onChange={handleRegisterInputChange}
					/>

					<input
						type="password"
						placeholder="Confirm password"
						name="rpassword2"
						className=""
						autoComplete="off"
						value={rpassword2}
						onChange={handleRegisterInputChange}
					/>

					<input type="submit" className="login-button" value="Register" />
					<Link className="mt-2" to="/login">
						Back to Login
					</Link>
				</form>
			</div>
		</div>
	);
};
