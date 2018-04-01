import {
	STATE_RESET,
	POSTS_LOADED,
	POST_ADDED,
	POST_REMOVED
} from './constants';

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