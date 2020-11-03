import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendForm } from "../actions/formAction";

export const Form = ({
  handleSubmit,
  textButton,
  handleInputChange,
  title,
  content,
}) => {

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        className="inTitle"
        placeholder="  Título del post"
        type="text"
        name="title"
        autoComplete="off"
        value={title}
        onChange={handleInputChange}
      />
      <br />
      <textarea
        type="text"
        className="text-content"
        placeholder="Escribe tu post aqui."
        name="content"
        autoComplete="off"
        value={content}
        onChange={handleInputChange}
      />
      <input type="submit" className="mgy center" value={textButton} />
    </form>
  );
};
