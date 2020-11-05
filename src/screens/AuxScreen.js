import React from 'react'
// import { PostCard } from '../posts/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../actions/auxAction';
import { PostCard } from '../posts/PostCard';
import { NewPostModal } from '../ui/NewPostModal';

const AuxScreen = () => {

  const {posts} = useSelector(({auxState})=> auxState);

  console.log(posts);

  const dispatch = useDispatch();

  const handleOpenNewPostModal = () => dispatch(openModal({}))
    
  return (
    <div>
      <hr/>
      <button onClick={handleOpenNewPostModal}>
        Agregar post
      </button>
      <center>
        {
          posts.map((post) =>
            <PostCard 
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
export default AuxScreen;