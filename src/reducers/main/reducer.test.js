import reducer from './reducer';
import {
	STATE_RESET,
	POSTS_LOADED,
	POST_ADDED,
	POST_REMOVED
} from './constants';


let initialState;
let posts;

beforeEach(() => {
	initialState = {
		isLoading: true,
		posts: [],
		ssr: false,
	};

	posts = [
		{ _id: 1, content: '1' },
		{ _id: 2, connect: '2' }
	];
});

describe('main reducer', () => {
	test('should return initial state', () => {
		const result = reducer(undefined, {});

		expect(result).toEqual(initialState);
	});

	test('should return correct state after state reset', () => {
		const state = {
			...initialState,
			posts: posts
		};
		const action = { type: STATE_RESET };

		const result = reducer(state, action);

		expect(result).toEqual(initialState);
	});

	describe('should return correct state after posts loaded', () => {
		test('on clent side', () => {
			const action = { type: POSTS_LOADED, posts, ssr: false };

			const result = reducer(initialState, action);

			expect(result).toEqual({
				isLoading: false,
				posts,
				ssr: false
			});
		});

		test('on server side', () => {
			const action = { type: POSTS_LOADED, posts, ssr: true };

			const result = reducer(initialState, action);

			expect(result).toEqual({
				isLoading: false,
				posts,
				ssr: true
			});
		});
	});

	test('should return correct state after post added', () => {
		const state = {
			...initialState,
			posts: posts
		};
		const newPost = { _id: 3, content: '3' };
		const action = { type: POST_ADDED, post: newPost };

		const result = reducer(state, action);

		expect(result.posts).toEqual([newPost, ...posts]);
	});

	test('should return correct state after post removed', () => {
		const state = {
			...initialState,
			posts: posts
		};
		const action = { type: POST_REMOVED, postId: 1 };

		const result = reducer(state, action);

		expect(result.posts).toEqual([{ _id: 2, connect: '2' }]);
	});
});