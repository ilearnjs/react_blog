import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import Posts from '../../components/Posts/Posts';
import UserInfo from '../../components/UserInfo/UserInfo';
import currentUser from '../../data/currentUser';
import { setUser, getPosts, removePost, stateReset } from '../../reducers/user';

class UserContainer extends Component {
	static ssrAction(store, match) {
		store.dispatch(setUser(match.params.userName));
		return store.dispatch(getPosts(match.params.userName, true));
	}

	componentDidMount() {
		if (!this.props.ssr) {
			const userName = this.props.match.params.userName;
			this.props.setUser(userName); // TODO Ask
			this.props.getPosts(userName);
		}
	}

	componentWillUnmount() {
		this.props.stateReset();
	}

	render() {
		if (this.props.isLoading) {
			return (
				<div className="loading">Loading...</div>
			);
		}

		return (
			<Aux>
				<UserInfo
					userName={this.props.userName}
				/>
				<Posts
					posts={this.props.posts}
					currentUser={this.props.user}
					remove={this.props.removePost}
				/>
			</Aux>
		);
	}
}

const mapStateToProps = (state, props) => ({ ...state.user, ...state.login, ...props });

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ setUser, getPosts, removePost, stateReset }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);