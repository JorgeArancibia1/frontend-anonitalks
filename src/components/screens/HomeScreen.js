import React, { useEffect } from 'react'
import { Navbar } from '../ui/Navbar'
import { PostCard } from '../posts/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { postsStartLoading, cleanPost } from '../../actions/postAction'
import { NewPostModal } from '../ui/NewPostModal'
import { openModal } from '../../actions/modalAction'
// import { refreshEfectt } from '../../hooks/refreshEffect'

export const HomeScreen = () => {

  const {posts} = useSelector(state => state.posts);

  const dispatch = useDispatch();

  // console.log(posts);
  // console.log("Home");


    useEffect(() => {
      dispatch(postsStartLoading());
    }, [dispatch])

    // useEffect(() => {
    //   dispatch(postsStartLoading());
    //   console.log("objeto cambio");
    // }, [posts])

    // refreshEfectt()

  // useMemo(refreshEfectthome, [dispatch])

  const handleModal = () => {
    dispatch(cleanPost())
    dispatch(openModal());
}

  return (
    <div>
      <h1>HomeScreen</h1>
      <Navbar />
      <hr/>
      <button onClick={handleModal}>
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
