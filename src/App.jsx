import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import MainContainer from './containers/MainContainer/MainContainer';
import UserContainer from './containers/UserContainer/UserContainer';

const app = () => (
	<Layout>
		<Route exact path="/" component={MainContainer} />
		<Route path="/user/:userName" component={UserContainer} />
	</Layout>
);

export default app;