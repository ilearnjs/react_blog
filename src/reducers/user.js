import axios from 'axios';

import { api_posts, api_posts_user, api_posts_remove } from '../apiConstants';

const USERNAME_SET = 'user/username_set';
const POSTS_LOADED = 'user/posts_loaded';
const POST_REMOVED = 'user/post_removed';
const STATE_RESET = 'user/reset';

const initialState = {
	userName: null,
	isLoading: true,
	posts: [],
	ssr: false
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case STATE_RESET:
			return initialState;

		case USERNAME_SET:
			return Object.assign(
				{},
				state,
				{
					userName: action.userName
				}
			);

		case POSTS_LOADED:
			return Object.assign(
				{},
				state,
				{
					isLoading: false,
					posts: [...action.posts],
					ssr: action.ssr
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

export const setUser = (userName) => (dispatch) => {
	return dispatch({
		type: USERNAME_SET,
		userName: userName
	});
}

export const getPosts = (userName, ssr) => (dispatch) => {
	return axios.get(api_posts_user(userName))
		.then(response => dispatch({
			type: POSTS_LOADED,
			posts: response.data,
			ssr
		}));
}

export const removePost = (postId) => (dispatch) => {
	return axios.delete(api_posts_remove(postId), getAxiosConfig())
		.then(response => dispatch({
			type: POST_REMOVED,
			postId: postId
		}));
}

export const stateReset = () => (dispatch) => {
	return dispatch({
		type: STATE_RESET
	});
}

function getAxiosConfig() {
	return {
		headers: {
			'Authorization': getToken()
		}
	};
}