import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import Posts from '../../components/Posts/Posts';
import NewPost from "../../components/NewPost/NewPost";
import postsService from '../../data/posts';
import currentUser from '../../data/currentUser';

class MainContainer extends Component {
	state = {
		posts: [],
		isLoading: true,
	}

	componentDidMount() {
		// TODO Replace with api call
		setTimeout(
			() => {
				this.setState({
					posts: postsService.get(),
					isLoading: false
				});
			}, 1000
		);
	}

	add(content, userName) {
		postsService.create({ content }, userName);
		this.setState({
			posts: postsService.get(),
			isLoading: false
		});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div className="loading">Loading...</div>
			);
		}

		return (
			<Aux>
				<NewPost add={this.add.bind(this)} />
				<Posts posts={this.state.posts} />
			</Aux>
		);
	}
}

export default MainContainer;