import React, { Component } from "react";
import { Link } from 'react-router-dom';
import currentUser from '../../data/currentUser';

class NewPost extends Component {
	state = {
		content: ''
	};

	onContentChanged(e) {
		this.setState({
			content: e.target.value
		});
	}

	onSendClick() {
		this.props.add(this.state.content, currentUser.name);
		this.setState({
			content: ''
		});
	}

	render() {
		return (
			<div className="new-post">
				<div className="new-post-content">
					<div className="new-post-header">
						<div className={`avatar ${currentUser.name}`}>
						</div>
						<Link to={`/user/${currentUser.name}`}>
							<span className="name">
								{`mr.${currentUser.name}`}
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
						Send
					</button>
				</div>
			</div>
		);
	}
}

export default NewPost;