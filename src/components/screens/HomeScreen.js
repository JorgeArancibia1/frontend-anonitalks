import React, { useEffect } from 'react'
import { Navbar } from '../ui/Navbar'
import { PostTarjet } from '../posts/PostTarjet'
import { useDispatch, useSelector } from 'react-redux'
import { postsStartLoading } from '../../actions/postAction'

export const HomeScreen = () => {

  const {posts} = useSelector(state => state.posts);
  // console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsStartLoading());
  }, [dispatch])

  return (
    <div>
      <h1>HomeScreen</h1>
      <Navbar />
      <hr/>
      <center>
        {/* {console.log(posts[0])} */}
        {
          posts.map((post, i) =>
            <PostTarjet 
            key={post.id} 
            user={post.user.name}
            title={post.title}
            content={post.content}
            />
          )
        }
      </center>
    </div>
  )
}
