import axios from 'axios';

import {
	api_posts,
	api_posts_remove
} from '../../apiConstants';

import {
	STATE_RESET,
	POSTS_LOADED,
	POST_ADDED,
	POST_REMOVED
} from './constants';

axios.defaults.withCredentials = true;

export const getPosts = (ssr = false) => (dispatch) => {
	return axios.get(api_posts)
		.then(response => dispatch({
			type: POSTS_LOADED,
			posts: response.data,
			ssr
		}));
}

export const addPost = (content) => (dispatch) => {
	const post = {
		content
	};

	return axios
		.post(api_posts, post)
		.then(response => dispatch({
			type: POST_ADDED,
			post: response.data
		}));
}

export const removePost = (postId) => (dispatch) => {
	return axios.delete(api_posts_remove(postId))
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