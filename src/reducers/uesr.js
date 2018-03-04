import postsService from './../data/posts';

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
		case USER_LOADED:
			return Object.assign(
				{},
				state,
				{
					user: action.user
				}
			);
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
			const index = state.posts.findIndex(p => p.id === action.postId);
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
	// TODO: Server call
	promise(
		() => postsService.get(userName),
		(data) => dispatch({
			type: POSTS_LOADED,
			posts: data
		})
	);
}

export const removePost = (postId) => (dispatch) => {
	// TODO: Server call
	promise(
		() => postsService.remove(postId),
		(data) => dispatch({
			type: POST_REMOVED,
			postId: postId
		})
	);
}

export const stateReset = () => (dispatch) => {
	dispatch({
		type: STATE_RESET
	})
}

function promise(action, dispatch) {
	return new Promise(resolve => {
		setTimeout(
			() => {
				resolve(action());
			},
			1000
		);
	}).then((data) => {
		dispatch(data);
	});
}