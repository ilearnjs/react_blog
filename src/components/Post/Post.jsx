import React from "react";
import { Link } from 'react-router-dom'

const post = ({ post }) => {
	return (
		<div className="post">
			<div className="post-content">
				<div className="header">
					<div className={`avatar ${post.user.name}`}>
					</div>
					<Link to={`/user/${post.user.name}`}>
						<span className="name">
							{`mr.${post.user.name}`}
						</span>
					</Link>
					<span className="created">
						{post.created.toLocaleDateString()}
					</span>
				</div>
				<div className="text">
					{post.content}
				</div>
			</div>
		</div>
	);
};

export default post;