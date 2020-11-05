import React from 'react';
import { startRegister } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    rname: 'jorge',
    remail: "jorge@gmail.com",
    rpassword1: "123456",
    rpassword2: "123456",
  });

  const { rname, remail, rpassword1, rpassword2 } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if ( rpassword1 !== rpassword2 ) {
      return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
    }

    dispatch( startRegister( rname, remail, rpassword1 ) );
  };


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={ handleRegister }>
        <input
          type="text"
          placeholder="Name"
          name="rname"
          className=""
          autoComplete="off"
          value={ rname }
          onChange={ handleRegisterInputChange }
        />

        <input
          type="text"
          placeholder="Email"
          name="remail"
          className=""
          autoComplete="off"
          value={ remail }
          onChange={ handleRegisterInputChange }
        />

        <input
          type="text"
          placeholder="Password"
          name="rpassword1"
          className=""
          autoComplete="off"
          value={ rpassword1 }
          onChange={ handleRegisterInputChange }
        />

        <input
          type="text"
          placeholder="Confirm password"
          name="rpassword2"
          className=""
          autoComplete="off"
          value={ rpassword2 }
          onChange={ handleRegisterInputChange }
        />

        <input type="submit" className="" value="Register" />
      </form>
      <Link to="/login" >Login</Link>
    </div>
  )
}
