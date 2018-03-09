import axios from 'axios';

import { api_posts, api_posts_remove } from '../apiConstants';

const POSTS_LOADED = 'main/posts_loaded';
const POST_ADDED = 'main/post_added';
const POST_REMOVED = 'main/post_removed';
const STATE_RESET = 'main/reset';

const initialState = {
	isLoading: true,
	posts: [],
	ssr: false,
};

export default function main(state = initialState, action) {
	switch (action.type) {
		case STATE_RESET:
			return initialState;
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

		case POST_ADDED:
			return Object.assign(
				{},
				state,
				{
					posts: [
						action.post,
						...state.posts
					],
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

export const getPosts = (ssr) => (dispatch) => {
	return axios.get(api_posts)
		.then(response => dispatch({
			type: POSTS_LOADED,
			posts: response.data,
			ssr
		}));
}

export const addPost = (content, name) => (dispatch) => {
	const post = {
		content,
		user: {
			name
		},
	};

	return axios.post(api_posts, post)
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