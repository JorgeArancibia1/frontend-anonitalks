import React, { useState, useEffect } from "react";

export const Form = ({
  actionF,
  textButton,
  handleInputChange,
  title,
  content,
  inputName,
  inputContent,
}) => {

  const [state, setstate] = useState({title: '', content: ''})

  useEffect(() => {
    setstate({...state, title, content})

  }, [title, content])

  // console.log(title)
  // console.log(content)

  return (
    <form onSubmit={actionF} className="container">
      <input
        className="inTitle"
        placeholder="  Título del post"
        type="text"
        name={inputName}
        autoComplete="off"
        value={state.title}
        onChange={handleInputChange}
      />
      <br />
      <textarea
        type="text"
        className="text-content"
        placeholder="Escribe tu post aqui."
        name={inputContent}
        autoComplete="off"
        value={state.content}
        onChange={handleInputChange}
      />
      <input type="submit" className="mgy center" value={textButton} />
    </form>
  );
};
