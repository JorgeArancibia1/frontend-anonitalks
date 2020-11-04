import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  sendPost,
  postUpdate,
} from "../actions/postAction";

export const Form = ({
  title,
  content,
  id = '',
  type,
}) => {
  const dispatch = useDispatch();

  const [_state, _setState] = useState({
    title: '',
    content: '',
    id: ''
  });

  useEffect(() => {
    _setState({ ..._state, title, content, id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    const target = e.target;

    _setState({
      ..._state,
      [target.name]: target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    if (type === "create") dispatch(sendPost(_state));
    else if (type === "update") dispatch(postUpdate(_state));
    return;
  }

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
      <input type="submit" className="mgy center" value={type === "create" ? "Postear" : "Actualizar"} />
    </form>
  );
};
