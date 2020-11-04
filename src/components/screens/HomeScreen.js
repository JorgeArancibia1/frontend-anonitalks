import React, { useEffect } from 'react'
import { Navbar } from '../ui/Navbar'
import { PostCard } from '../posts/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { postsStartLoading } from '../../actions/postAction'
import { NewPostModal } from '../ui/NewPostModal'
import { openModal } from '../../actions/modalAction'

export const HomeScreen = () => {
  const dispatch = useDispatch();
  
  const { posts } = useSelector(state => state.posts);
  
  useEffect(() => {
    dispatch(postsStartLoading());
  }, [dispatch])

  const handleOpenModal = () => dispatch(openModal({}))

  return (
    <div>
      <h1>HomeScreen</h1>
      <Navbar />
      <hr/>
      <button onClick={() => handleOpenModal()}>
        Agregar post
      </button>
      <center>
        {
          posts.map((post) =>
            <PostCard 
              key={post.id} 
              {...post}
              user={post.user.name}
            />
          )
        }
      </center>
      <NewPostModal />
    </div>
  )
}
