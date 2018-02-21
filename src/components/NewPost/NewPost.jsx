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

	onSendClick() {
		if (!this.state.content) {
			return;
		}
		
		this.props.add(this.state.content, this.currentUser.name);
		this.setState({
			content: ''
		});
	}

	render() {
		return (
			<div className="new-post">
				<div className="new-post-content">
					<div className="new-post-header">
						<div className={`avatar ${this.currentUser.name}`}>
						</div>
						<Link to={`/user/${this.currentUser.name}`}>
							<span className="name">
								{`mr.${this.currentUser.name}`}
							</span>
						</Link>
					</div>
					<textarea
						value={this.state.content}
						onChange={(e) => this.onContentChanged(e)}
						cols="70"
						rows="4"
					></textarea>
					<button onClick={() => this.onSendClick()}>
						Post
					</button>
				</div>
			</div>
		);
	}
}

export default NewPost;