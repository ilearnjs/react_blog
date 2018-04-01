import {
	api_posts,
	api_posts_user,
	api_posts_remove
} from "./apiConstants";

describe('api constants', () => {
	test('api_posts_user', () => {
		const name = 'srikes';
		const result = api_posts_user(name);

		expect(result).toEqual(`${api_posts}/user/${name}`);
	});

	test('api_posts_remove', () => {
		const postId = 19;
		const result = api_posts_remove(postId);

		expect(result).toEqual(`${api_posts}/${postId}`);
	});
});