import App from './App';
import MainContainer from './containers/MainContainer/MainContainer';
import UserContainer from './containers/UserContainer/UserContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import SignupContainer from './containers/SignupContainer/SignupContainer';

const routes = [
	{
		component: App,
		routes: [
			{
				path: '/',
				exact: true,
				component: MainContainer
			},
			{
				path: '/user/:userName',
				component: UserContainer
			},
			{
				path: '/login',
				component: LoginContainer
			},
			{
				path: '/signup',
				component: SignupContainer
			}
		]
	}
];

export default routes;