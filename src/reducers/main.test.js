import reducer from './main';

const initialState = {
	isLoading: true,
	posts: [],
	ssr: false,
};

let state;

beforeEach(() => {
	state = initialState;
});

describe('main reducer', () => {
	test('should return initail state', () => {
		const result = reducer(undefined, {});
		expect(result).toEqual(state);
	});
});