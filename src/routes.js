import App from './App';
import MainContainer from './containers/MainContainer/MainContainer';
import UserContainer from './containers/UserContainer/UserContainer';

const routes = [
	{
		component: App,
		routes: [
			{
				path: '/',
				exact: true,
				component: MainContainer,
			},
			{
				path: '/user/:userName',
				component: UserContainer
			}
		]
	}
];

export default routes;