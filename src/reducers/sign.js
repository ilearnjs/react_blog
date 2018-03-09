import axios from 'axios';

import { api_signin, api_signup } from '../apiConstants';

const USER_SIGNED_IN = 'sign/user_signed_in';
const USER_SIGNED_OUT = 'sign/user_signed_out';

const initialState = {
	user: null,
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

		case USER_SIGNED_OUT:
			return initialState;

		default:
			return state;
	}
}

export const signinAction = (userName, password) => (dispatch) => {
	return axios.post(api_signin, {
		userName,
		password
	})
		.then(responce => dispatch({
			type: USER_SIGNED_IN,
			user: responce.data
		}));
}

export const signupAction = (userName, password) => (dispatch) => {
	return axios.post(api_signup, {
		userName,
		password
	})
		.then(responce => dispatch({
			type: USER_SIGNED_IN,
			user: responce.data
		}));
}

export const signoutAction = () => (dispatch) => {
	return dispatch({
		type: USER_SIGNED_OUT
	});
}