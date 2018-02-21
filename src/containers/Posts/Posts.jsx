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
		// TODO Replace with api call
		setTimeout(
			() => {
				this.setState({
					posts: this.getPosts(),
					isLoading: false
				});
			}, 1000
		);
	}

	getPosts() {
		return this.props.userName
			? posts.filter(p => p.user.name === this.props.userName)
			: posts;
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