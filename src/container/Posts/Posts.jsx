import React, { Component } from "react";
import Post from '../../components/Post/Post';
import posts from '../../data/posts';

export default class Posts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			isLoading: true,
		}
	}

	componentDidMount() {
		// TODO Move to data service
		setTimeout(
			() => {
				this.setState({
					posts: posts,
					isLoading: false
				});
			}, 1000
		);
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div className="loading">Loading...</div>
			);
		}

		return (
			<div className="posts">
				{this.state.posts.map(p => <Post key={p.id} post={p} />)}
			</div>
		);
	}
}
