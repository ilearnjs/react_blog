import React from "react";
import Post from '../../components/Post/Post';

const posts = ({ posts }) => {
	return (
		<div className="posts">
			{posts.map(p => <Post key={p.id} post={p} />)}
		</div>
	);
}

export default posts;