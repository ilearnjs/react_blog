import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Post extends Component {
	onRemoveClicked() {
		const { post: { id }, remove } = this.props;
		
		remove(id);
	}

	render() {
		const { post, userName } = this.props;

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
						{userName === post.user.name &&
							<button className="remove-btn" onClick={() => this.onRemoveClicked()}>
								Remove
							</button>
						}
					</div>
					<div className="text">
						{post.content}
					</div>
				</div>
			</div>
		);
	}
}

export default Post;