import React, { Component } from 'react';
import Posts from '../../components/Posts/Posts';
import UserInfo from '../../components/UserInfo/UserInfo';
import Aux from '../Auxiliary/Auxiliary';
import currentUser from '../../data/currentUser';
import PostsService from '../../data/posts';

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
					posts: PostsService.get(this.userName),
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
			<Aux>
				<UserInfo userName={this.userName} />
				<Posts posts={this.state.posts} />
			</Aux>
		);
	}
}

export default UserContainer;