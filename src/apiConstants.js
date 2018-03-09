export const api = 'http://localhost:3000';

export const api_signin = `${api}/user/signin`;
export const api_signup = `${api}/user/signup`;

export const api_posts = `${api}/posts`;
export const api_posts_user = (userName) => `${api_posts}/user/${userName}`;
export const api_posts_remove = (postId) => `${api_posts}/${postId}`;