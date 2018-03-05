import axios from 'axios';

import { api_posts, api_posts_user, api_posts_remove } from '../apiConstants';

const USER_LOADED = 'user/user_loaded';
const POSTS_LOADED = 'user/posts_loaded';
const POST_REMOVED = 'user/post_removed';
const STATE_RESET = 'user/reset';

const initialState = {
	isLoading: true,
	posts: [],
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case STATE_RESET:
			return initialState;
		case POSTS_LOADED:
			return Object.assign(
				{},
				state,
				{
					isLoading: false,
					posts: [...action.posts]
				}
			);

		case POST_REMOVED:
			const index = state.posts.findIndex(p => p._id === action.postId);
			return Object.assign(
				{},
				state,
				{
					posts: [
						...state.posts.slice(0, index),
						...state.posts.slice(index + 1)
					]
				}
			);

		default:
			return state;
	}
}

export const getPosts = (userName) => (dispatch) => {
	axios.get(api_posts_user(userName))
		.then(responce => dispatch({
			type: POSTS_LOADED,
			posts: responce.data
		}));
}

export const removePost = (postId) => (dispatch) => {
	axios.delete(api_posts_remove(postId))
		.then(responce => dispatch({
			type: POST_REMOVED,
			postId: postId
		}));
}

export const stateReset = () => (dispatch) => {
	dispatch({
		type: STATE_RESET
	})
}