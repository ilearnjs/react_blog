import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Posts from '../../components/Posts/Posts';
import UserInfo from '../../components/UserInfo/UserInfo';
import currentUser from '../../data/currentUser';
import postsService from '../../data/posts';

class UserContainer extends Component {
	userName = this.props.match.params.userName;
	state = {
		posts: [],
		isLoading: true,
	};

	componentDidMount() {
		// TODO Replace with api call
		setTimeout(
			() => {
				this.setState({
					posts: postsService.get(this.userName),
					isLoading: false
				});
			}, 1000
		);
	}

	remove(postId) {
		postsService.remove(postId);
		this.setState({
			posts: postsService.get(this.userName),
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
				<UserInfo
					userName={this.userName}
				/>
				<Posts
					posts={this.state.posts}
					userName={currentUser.name}
					remove={this.remove.bind(this)}
				/>
			</Aux>
		);
	}
}

export default UserContainer;