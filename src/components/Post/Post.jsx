import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Post extends Component {
	onRemoveClicked() {
		const { post: { _id }, removePost } = this.props;

		removePost(_id);
	}

	render() {
		const { post, currentUser } = this.props;
		const avatarStyle = {
			backgroundImage: `url(https://api.adorable.io/avatars/60/${post.user.name})`,
		};

		return (
			<div className="post">
				<div className="post-content">
					<div className="header">
						<div
							className={`avatar ${post.user.name}`}
							style={avatarStyle}
						>
						</div>
						<Link to={`/user/${post.user.name}`}>
							<span className="name">
								{post.user.name}
							</span>
						</Link>
						<span className="created">
							{(new Date(post.createdOn)).toLocaleDateString()}
						</span>
						{currentUser && currentUser.name === post.user.name &&
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