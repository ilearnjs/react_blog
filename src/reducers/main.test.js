import reducer from './main';
import { POSTS_LOADED, STATE_RESET } from './main';
import { connect } from 'react-redux';
import posts from '../components/Posts/Posts';

let initialState;

beforeEach(() => {
	initialState = {
		isLoading: true,
		posts: [],
		ssr: false,
	};
});

test('toEqual for circular dependency works', () => {
	const a = { field: 'text' };
	a.a = a;

	const b = { field: 'text' };
	b.a = b;

	expect(a).toEqual(b);
});

describe('main reducer', () => {
	test('should return initial state', () => {
		const result = reducer(undefined, {});

		expect(result).toEqual(initialState);
	});
	test('should return correct state after reset', () => {
		const state = {
			...initialState,
			posts: [1, 2]
		};
		const action = { type: STATE_RESET };

		const result = reducer(state, action);

		expect(result).toEqual(initialState);
	});

	describe('should return correct state after loading posts', () => {
		const posts = [{ id: 1, content: '1' }, { id: 2, connect: '2' }];

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
});