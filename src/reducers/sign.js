import axios from 'axios';

import { api_signin, api_signup } from '../apiConstants';

const USER_SIGNED_IN = 'sign/user_signed_in';
const USER_SIGNED_OUT = 'sign/user_signed_out';
const USER_ERROR = 'sign/error';

const initialState = {
	user: null,
	error: null
};

export default function sign(state = initialState, action) {
	switch (action.type) {
		case USER_SIGNED_IN:
			return Object.assign(
				{},
				state,
				{
					user: action.user,
				}
			);

		case USER_ERROR:
			console.log(action.error);
			return Object.assign(
				{},
				state,
				{
					error: action.error,
				}
			);

		case USER_SIGNED_OUT:
			return initialState;

		default:
			return state;
	}
}

export const signin = (userName, password) => (dispatch) => {
	return axios.post(api_signin, {
		userName,
		password
	})
		.then(response =>
			dispatch({
				type: USER_SIGNED_IN,
				user: response.data
			})
		)
		.catch(error =>
			dispatch({
				type: USER_ERROR,
				error: error.response.data
			})
		);
}

export const signup = (userName, password) => (dispatch) => {
	return axios.post(api_signup, {
		userName,
		password
	})
		.then(response =>
			dispatch({
				type: USER_SIGNED_IN,
				user: response.data
			})
		)
		.catch(error =>
			dispatch({
				type: USER_ERROR,
				error: error.response.data
			})
		);
}

export const signout = () => (dispatch) => {
	return dispatch({
		type: USER_SIGNED_OUT
	});
}