import React from "react";
import { useSelector } from "react-redux";

export const Form = ({
  actionF,
  textButton,
  handleInputChange,
  title,
  content,
  inputName,
  inputContent,
}) => {

  // const {post} = useSelector((state) => state.posts);
  // console.log("post.title",post.title)
  // console.log("title",title)
  // if (post) {
  //   return title = post.title
  // }

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
