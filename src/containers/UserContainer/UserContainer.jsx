import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import Posts from '../../components/Posts/Posts';
import UserInfo from '../../components/UserInfo/UserInfo';
import currentUser from '../../data/currentUser';
import { getPosts, removePost, stateReset } from '../../reducers/uesr';

class UserContainer extends Component {
	componentDidMount() {
		this.userName = this.props.match.params.userName;
		this.props.getPosts(this.userName);
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
					userName={this.userName}
				/>
				<Posts
					posts={this.props.posts}
					userName={currentUser.name}
					remove={this.props.removePost}
				/>
			</Aux>
		);
	}
}

const mapStateToProps = (state, props) => ({ ...props, ...state.user });

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ getPosts, removePost, stateReset }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);