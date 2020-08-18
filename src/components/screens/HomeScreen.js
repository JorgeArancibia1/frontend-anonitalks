import React, { useEffect } from 'react'
import { Navbar } from '../ui/Navbar'
import { PostTarjet } from '../posts/PostTarjet'
import { useDispatch, useSelector } from 'react-redux'
import { postsStartLoading } from '../../actions/postAction'
import { Link } from 'react-router-dom'
import { NewPostModal } from '../ui/NewPostModal'
import { openModal } from '../../actions/modalAction'

export const HomeScreen = () => {

  const {posts} = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsStartLoading());
  }, [dispatch, posts])

  const handleModal = (e) => {
    dispatch( openModal() );
}

  return (
    <div>
      <h1>HomeScreen</h1>
      <Navbar />
      <hr/>
      <Link to="/add">
      <button onClick={handleModal}>
        Agregar post
      </button>
      </Link>
      <center>
        {
          posts.map((post) =>
            <PostTarjet 
            key={post.id} 
            {...post}
            user={post.user.name}
            // title={post.title}
            // content={post.content}
            />
          )
        }
      </center>
      <NewPostModal />
    </div>
  )
}
