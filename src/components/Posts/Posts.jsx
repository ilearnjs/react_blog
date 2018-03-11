import React from "react";
import Post from '../../components/Post/Post';

const posts = ({ posts, currentUser, removePost }) => {
	if (!posts.length) {
		return (
			<span>Nothing posted yet</span>
		);
	}

	return (
		<div className="posts">
			{posts.map(p => <Post key={p._id} post={p} currentUser={currentUser} removePost={removePost} />)}
		</div>
	);
}

export default posts;