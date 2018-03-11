const tokenKey = 'app_jwt';

export const getToken = () => {
	return window.localStorage.getItem(tokenKey);
}

export const setToken = (token) => {
	window.localStorage.setItem(tokenKey, token);
}

export const removeToken = () => {
	window.localStorage.removeItem(tokenKey);
}