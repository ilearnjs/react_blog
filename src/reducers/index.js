import { combineReducers } from 'redux'
import main from './main';
import user from './user';
import sign from './sign';

export default combineReducers({
	main,
	user,
	sign
});