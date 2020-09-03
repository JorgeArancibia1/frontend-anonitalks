import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendForm } from "../actions/formAction";

export const Form = ({
  handleSubmit,
  textButton,
  handleInputChange,
  // title,
  // content,
  inputName,
  inputContent,
}) => {

  const { form } = useSelector((state) => state);

  // const {post} = useSelector((state) => state.posts);
  // console.log("post.title",post.title)
  // console.log("title",title)
  // if (post) {
  //   return title = post.title
  // }
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(sendForm({title,content}))
  // }, [title, content])

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        className="inTitle"
        placeholder="  Título del post"
        type="text"
        name={inputName}
        autoComplete="off"
        value={form.title}
        onChange={handleInputChange}
      />
      <br />
      <textarea
        type="text"
        className="text-content"
        placeholder="Escribe tu post aqui."
        name={inputContent}
        autoComplete="off"
        value={form.content}
        onChange={handleInputChange}
      />
      <input type="submit" className="mgy center" value={textButton} />
    </form>
  );
};
