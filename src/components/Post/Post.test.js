import React from 'react';
import { MemoryRouter } from 'react-router';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Post from './Post';

const post = {
	_id: 332,
	user: {
		name: 'Alisa',
	},
	createdOn: new Date('01-01-2018'),
	content: 'Azaza'
};

const creator = {
	name: 'Alisa',
};

const notCreator = {
	name: 'Bob',
};

describe('Post.jsx', () => {
	test('renders correctly for creator', () => {
		const wrapper = shallow(
			<Post post={post} currentUser={creator} />
		);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	test('renders correctly for not creator', () => {
		const wrapper = shallow(
			<Post post={post} currentUser={notCreator} />
		);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	test('remove post called', () => {
		const removePost = jest.fn();

		const wrapper = shallow(
			<Post post={post} currentUser={creator} removePost={removePost} />
		);

		wrapper.find(".remove-btn").simulate("click");
		expect(removePost.mock.calls.length).toBe(1);
	});

	test('remove post called with correct id', () => {
		const removePost = jest.fn();

		const wrapper = shallow(
			<Post post={post} currentUser={creator} removePost={removePost} />
		);

		wrapper.find(".remove-btn").simulate("click");
		expect(removePost.mock.calls[0][0]).toBe(post._id);
	});
});
