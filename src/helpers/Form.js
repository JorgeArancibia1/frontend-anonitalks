import React from 'react'
import { useSelector } from 'react-redux'

export const Form = ({actionF, value, handlePostInputChange, titleForm, contentForm }) => {
  const {title, content} = useSelector((state) => state.posts.post )

  return (
    <form onSubmit={actionF} className="container">
          <input
            className="inTitle"
            placeholder="  Título del post"
            type="text"
            name="titleForm"
            autoComplete="off"
            value={title}
            onChange={handlePostInputChange}
          />
          <br />
          <textarea
            type="text"
            className="text-content"
            placeholder="Escribe tu post aqui."
            name="contentForm"
            autoComplete="off"
            value={content}
            onChange={handlePostInputChange}
          />
          <input type="submit" className="mgy center" value={value} />
        </form>
  )
}
