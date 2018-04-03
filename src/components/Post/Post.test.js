import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

import Post from './Post';

it('renders correctly', () => {
	const post = {
		user: {
			name: 'Jurgen',
		},
		createdOn: new Date('01-01-2018'),
		content: 'Azaza'
	};

	const user = {

	};

	const renderedPost = renderer
		.create(
			<MemoryRouter>
				<Post post={post} currentUser={user} />
			</MemoryRouter>
		)
		.toJSON();
	expect(renderedPost).toMatchSnapshot();
});