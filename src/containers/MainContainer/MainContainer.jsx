import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Aux from "../Auxiliary/Auxiliary";
import Posts from '../../components/Posts/Posts';
import NewPost from "../../components/NewPost/NewPost";
import { getPosts, addPost, removePost, stateReset } from './../../reducers/main/actions';

class MainContainer extends Component {
	static ssrAction(store) {
		return store.dispatch(getPosts(true));
	}

	componentDidMount() {
		if (!this.props.ssr) {
			this.props.getPosts();
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

		const currentUser = this.props.user;
		
		return (
			<Aux>
				{currentUser &&
					<NewPost
						currentUser={currentUser}
						addPost={this.props.addPost}
					/>
				}
				<Posts
					posts={this.props.posts}
					currentUser={currentUser}
					removePost={this.props.removePost}
				/>
			</Aux>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.main, ...state.sign });
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ getPosts, addPost, removePost, stateReset }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);