import React, { useEffect } from 'react'
import { Navbar } from '../ui/Navbar'
import { PostCard } from '../posts/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { postsStartLoading, cleanPost } from '../../actions/postAction'
import { NewPostModal } from '../ui/NewPostModal'
import { openModal } from '../../actions/modalAction'
import { sendForm } from '../../actions/formAction'

export const HomeScreen = () => {

  // const [statePost, setStatePost] = useState(null)

  const { posts } = useSelector(state => state.posts);
  const { form } = useSelector((state) => state);

  // console.log(form);

  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(postsStartLoading());
    }, [dispatch])

    const handleOpenModal = () => dispatch(openModal({}))

  return (
    <div>
      <h1>HomeScreen</h1>
      <Navbar />
      <hr/>
      <button onClick={handleOpenModal}>
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
