import axios from 'axios';

import { api_signin, api_signup, api_signout } from '../apiConstants';

axios.defaults.withCredentials = true;

const USER_SIGNED_IN = 'sign/user_signed_in';
const USER_SIGNED_OUT = 'sign/user_signed_out';
const USER_ERROR = 'sign/error';
const STATE_RESET = 'sign/reset';

const initialState = {
	user: null,
	error: null
};

export default function sign(state = initialState, action) {
	switch (action.type) {
		case STATE_RESET:
			return Object.assign(
				{},
				state,
				{
					error: null,
				}
			);
		case USER_SIGNED_IN:
			return Object.assign(
				{},
				state,
				{
					user: action.user,
				}
			);

		case USER_ERROR:
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
	return axios
		.post(api_signin, { userName, password })
		.then(response => {
			dispatch({
				type: USER_SIGNED_IN,
				user: response.data.user
			});
		})
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
		.then(response => {
			dispatch({
				type: USER_SIGNED_IN,
				user: response.data.user
			});
		})
		.catch(error =>
			dispatch({
				type: USER_ERROR,
				error: error.response.data
			})
		);
}

export const signout = () => (dispatch) => {
	return axios.post(api_signout)
		.then(response => {
			return dispatch({
				type: USER_SIGNED_OUT
			});
		});
}

export const stateReset = () => (dispatch) => {
	return dispatch({
		type: STATE_RESET
	});
}

export const setUser = (userName) => (dispatch) => {
	dispatch({
		type: USER_SIGNED_IN,
		user: { name: userName }
	});
}