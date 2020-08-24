import React from "react";
// import { useSelector } from 'react-redux'

export const Form = ({
  actionF,
  textButton,
  handleInputChange,
  title,
  content,
  inputName,
  inputContent,
}) => {
  // const {title, content} = useSelector((state) => state.posts.post )

  // console.log("Form");

  return (
    <form onSubmit={actionF} className="container">
      <input
        className="inTitle"
        placeholder="  Título del post"
        type="text"
        name={inputName}
        autoComplete="off"
        value={title}
        onChange={handleInputChange}
      />
      <br />
      <textarea
        type="text"
        className="text-content"
        placeholder="Escribe tu post aqui."
        name={inputContent}
        autoComplete="off"
        value={content}
        onChange={handleInputChange}
      />
      <input type="submit" className="mgy center" value={textButton} />
    </form>
  );
};
