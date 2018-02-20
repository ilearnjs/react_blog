import React, { Component } from 'react';

export default class Post extends Component {
	render() {
		const post = this.props.post;

		return (
			<div className="post">
				<div className="content">
					<div className="header">
						<div className={`avatar ${post.user.name}`}>
						</div>
						<span className="name">
							{`@${post.user.name}`}
						</span>
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
	}
}
