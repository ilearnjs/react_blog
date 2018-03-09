import axios from 'axios';

import { api_login, api_signup } from '../apiConstants';

const USER_LOGGED_IN = 'login/user_logged_in';

const initialState = {
	user: null,
};

export default function login(state = initialState, action) {
	switch (action.type) {
		case USER_LOGGED_IN:
			return Object.assign(
				{},
				state,
				{
					user: action.user,
				}
			);

		default:
			return state;
	}
}

export const loginAction = (userName, password) => (dispatch) => {
	return axios.post(api_login, {
		userName,
		password
	})
		.then(responce => dispatch({
			type: USER_LOGGED_IN,
			user: responce.data
		}));
}

export const signupAction = (userName, password) => (dispatch) => {
	return axios.post(api_signup, {
		userName,
		password
	})
		.then(responce => dispatch({
			type: USER_LOGGED_IN,
			user: responce.data
		}));
}