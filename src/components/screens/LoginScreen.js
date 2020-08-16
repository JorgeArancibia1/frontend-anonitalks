import React from "react";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from "../../actions/authAction";
import { Link } from "react-router-dom";

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formLoginValues, handleLoginInputChange ] = useForm({
    lemail: "jorge@gmail.com",
    lpassword: "123456",
  });

  const { lemail, lpassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLogin(lemail, lpassword) );
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <form onSubmit={ handleLogin }>
        <input
          type="text"
          placeholder="Email"
          name="lemail"
          className=""
          autoComplete="off"
          value={ lemail }
          onChange={ handleLoginInputChange }
        />

        <input
          type="text"
          placeholder="Password"
          name="lpassword"
          className=""
          autoComplete="off"
          value={ lpassword }
          onChange={ handleLoginInputChange }
        />

        <input type="submit" className="" value="Entrar" />
        <Link to="/signup">Sign up</Link>
      </form>
    </div>
  );
};
