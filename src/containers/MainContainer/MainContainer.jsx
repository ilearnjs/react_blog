import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Aux from "../Auxiliary/Auxiliary";
import Posts from '../../components/Posts/Posts';
import NewPost from "../../components/NewPost/NewPost";
import postsService from '../../data/posts';
import currentUser from '../../data/currentUser';
import { getPosts, addPost, removePost, stateReset } from './../../reducers/main';

class MainContainer extends Component {
	componentDidMount() {
		this.props.getPosts();
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
				<NewPost
					currentUser={currentUser}
					add={this.props.addPost}
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

const mapStateToProps = (state) => ({ ...state.main });
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ getPosts, addPost, removePost, stateReset }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);