import { combineReducers } from 'redux'
import main from './main';
import user from './user';
import login from './login';

export default combineReducers({
	main,
	user,
	login
});