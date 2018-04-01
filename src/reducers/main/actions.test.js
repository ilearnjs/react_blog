import axios from 'axios';

import actions from './actions';
import {
	STATE_RESET,
	POSTS_LOADED,
	POST_ADDED,
	POST_REMOVED
} from './constants';
import {
	getPosts,
	addPost,
	removePost,
	stateReset
} from './../../reducers/main/actions';
import {
	api_posts_remove
} from '../../apiConstants';

jest.mock('axios');
jest.mock('../../apiConstants');

api_posts_remove.mockImplementation((id) => id);

let dispatch;

beforeEach(() => {
	dispatch = jest.fn();
});

describe('main action', () => {
	describe('getPosts', () => {
		const response = {
			data: [
				{ _id: 1, content: '1' },
				{ _id: 2, connect: '2' }
			]
		};
		axios.get.mockResolvedValue(response);

		describe('server side', () => {
			test('called once', () => {
				getPosts(true)(dispatch).then(() => {
					expect(dispatch.mock.calls.length).toBe(1);
				});
			});

			test('dispatch action', () => {
				getPosts(true)(dispatch).then(() => {
					expect(dispatch.mock.calls[0][0]).toEqual({
						type: POSTS_LOADED,
						posts: response.data,
						ssr: true
					});
				});
			});
		});

		describe('client side', () => {
			test('called once', () => {
				getPosts()(dispatch).then(() => {
					expect(dispatch.mock.calls.length).toBe(1);
				});
			});

			test('dispatch action', () => {
				getPosts()(dispatch).then(() => {
					expect(dispatch.mock.calls[0][0]).toEqual({
						type: POSTS_LOADED,
						posts: response.data,
						ssr: false
					})
				});
			});
		})
	});

	describe('addPost', () => {
		const content = 'content';
		const response = {
			data: 'someData'
		};
		axios.post.mockResolvedValue(response);

		test('called once', () => {
			addPost(content)(dispatch).then(() => {
				expect(dispatch.mock.calls.length).toBe(1);
			});
		});

		test('dispatch action', () => {
			addPost(content)(dispatch).then(() => {
				expect(dispatch.mock.calls[0][0]).toEqual({
					type: POST_ADDED,
					post: response.data
				});
			});
		});

		test('call params', () => {
			addPost(content)(dispatch).then(() => {
				expect(axios.post.mock.calls[0][1]).toEqual({
					content
				});
			});
		});
	});

	describe('removePost', () => {
		const postId = 5;
		const response = {
			code: 200
		};
		axios.delete.mockResolvedValue(response);

		test('called once', () => {
			removePost(postId)(dispatch).then(() => {
				expect(dispatch.mock.calls.length).toBe(1);
			});
		});

		test('dispatch action', () => {
			removePost(postId)(dispatch).then(() => {
				expect(dispatch.mock.calls[0][0]).toEqual({
					type: POST_REMOVED,
					postId
				});
			});
		});

		test('call params', () => {
			removePost(postId)(dispatch).then(() => {
				expect(axios.delete.mock.calls[0][0]).toEqual(postId);
			});
		});
	});

	describe('stateReset', () => {
		test('called once', () => {
			stateReset()(dispatch);

			expect(dispatch.mock.calls.length).toBe(1);
		});

		test('dispatch action', () => {
			stateReset()(dispatch);
			expect(dispatch.mock.calls[0][0]).toEqual({
				type: STATE_RESET
			});
		});
	});
});
