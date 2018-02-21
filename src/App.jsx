import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Posts from './containers/Posts/Posts';
import User from './containers/User/User';

const app = () => (
	<Layout>
		<Route exact path="/" component={Posts} />
		<Route path="/user/:userName" component={User} />
	</Layout>
);

export default app;