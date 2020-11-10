import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../components/ui/Navbar';
import { PostCard } from '../../components/posts/PostCard';
import { postsStartLoading } from '../../redux/actions/postAction';
import { NewPostModal } from '../../components/ui/NewPostModal';
import { openModal } from '../../redux/actions/modalAction';

export const HomeScreen = () => {
	const dispatch = useDispatch();

	const { posts } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(postsStartLoading());
	}, [dispatch]);

	const handleOpenModal = () => dispatch(openModal({}));

	return (
		<div>
			<header>
				<img
					className="title-anonitalks-home"
					src="https://res.cloudinary.com/initial-cloud/image/upload/c_scale,h_48,w_225/v1604950450/anonitalks_ro0daj.jpg"
					alt=""
				/>
				<Navbar />
			</header>
			<hr />
			<button className="standard-button m-4" onClick={() => handleOpenModal()}>
				Agregar post
			</button>
			<center>
				{posts.map((post) => (
					<PostCard key={post.id} {...post} user={post.user.name} />
				))}
			</center>
			<NewPostModal />
		</div>
	);
};
