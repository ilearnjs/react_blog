import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NewPost extends Component {
	currentUser = this.props.currentUser;
	state = {
		content: ''
	};

	onContentChanged(e) {
		this.setState({
			content: e.target.value
		});
	}

	onPostClick() {
		if (!this.state.content) {
			return;
		}

		this.props.addPost(this.state.content);
		this.setState({
			content: ''
		});
	}

	render() {
		const userName = this.currentUser.name;

		return (
			<div className="new-post">
				<div className="new-post-content">
					<div className="new-post-header">
						<div className={`avatar ${userName}`}>
						</div>
						<Link to={`/user/${userName}`}>
							<span className="name">
								{`mr.${userName}`}
							</span>
						</Link>
					</div>
					<textarea
						className="new-post-textarea "
						value={this.state.content}
						onChange={(e) => this.onContentChanged(e)}
					></textarea>
					<button onClick={() => this.onPostClick()}>
						Post
					</button>
				</div>
			</div>
		);
	}
}

export default NewPost;