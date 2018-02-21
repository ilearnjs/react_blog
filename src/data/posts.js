const posts = [
	{
		id: 1,
		user: {
			name: 'orange'
		},
		created: new Date(2018, 1, 18),
		content: 'The orange colour of carrots, pumpkins, sweet potatoes, oranges, and many other fruits and vegetables comes from carotenes, a type of photosynthetic pigment.'
	},
	{
		id: 2,
		user: {
			name: 'white'
		},
		created: new Date(2018, 1, 19),
		content: '#000000'
	},
	{
		id: 3,
		user: {
			name: 'brown'
		},
		created: new Date(2018, 1, 20),
		content: 'my real name is quentin'
	},
	{
		id: 4,
		user: {
			name: 'orange'
		},
		created: new Date(2018, 1, 20),
		content: 'What did the apple say to the orange? Nothing stupid, apples don\'t talk.'
	},
	{
		id: 5,
		user: {
			name: 'pink'
		},
		created: new Date(2018, 1, 21),
		content: '...'
	},
	{
		id: 6,
		user: {
			name: 'blue'
		},
		created: new Date(2018, 1, 21),
		content: 'I\'m blue'
	},
	{
		id: 7,
		user: {
			name: 'orange'
		},
		created: new Date(2018, 1, 21),
		content: `What is orange and sounds like a parrot?\nA carrot.`
	},
];

let nextId;

class PostsService {
	constructor() {
		nextId = Math.max(...posts.map(p => p.id));
	}

	get(userName) {
		const filteredPosts = userName
			? posts.filter(p => p.user.name === userName)
			: posts;

		return filteredPosts.sort((p1, p2) => p2.created - p1.created);
	}

	create(post, userName) {
		post = Object.assign(
			post,
			{
				id: ++nextId,
				user: { name: userName },
				created: new Date()
			});
		posts.push(post);
	}

	remove(postId) {
		const index = posts.findIndex(p => p.id === postId);
		posts.splice(index, 1);
	}
}

const postsService = new PostsService();

export default postsService;