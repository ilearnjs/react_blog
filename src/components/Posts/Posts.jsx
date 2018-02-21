import React from "react";
import Post from '../../components/Post/Post';

const posts = ({ posts, userName, remove }) => {
	if (!posts.length) {
		return (
			<span>Nothing posted yet</span>
		);
	}

	return (
		<div className="posts">
			{posts.map(p => <Post key={p.id} post={p} userName={userName} remove={remove} />)}
		</div>
	);
}

export default posts;