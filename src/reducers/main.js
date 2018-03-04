import postsService from './../data/posts';

const POSTS_LOADED = 'main/posts_loaded';
const POST_ADDED = 'main/post_added';
const POST_REMOVED = 'main/post_removed';


const initialState = {
	isLoading: true,
	posts: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case POSTS_LOADED:
			return Object.assign(
				{},
				state,
				{
					isLoading: false,
					posts: [...action.posts]
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

export const getPosts = () => (dispatch) => {
	// TODO: Server call
	promise(
		() => postsService.get(),
		(data) => dispatch({
			type: POSTS_LOADED,
			posts: data
		})
	);
}

export const addPost = (content, userName) => (dispatch) => {
	// TODO: Server call
	promise(
		() => postsService.create({ content }, userName),
		(data) => dispatch({
			type: POST_ADDED,
			post: data
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