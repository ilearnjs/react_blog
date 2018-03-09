import App from './App';
import MainContainer from './containers/MainContainer/MainContainer';
import UserContainer from './containers/UserContainer/UserContainer';
import SigninContainer from './containers/SigninContainer/SigninContainer';
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
				path: '/signin',
				component: SigninContainer
			},
			{
				path: '/signup',
				component: SignupContainer
			}
		]
	}
];

export default routes;