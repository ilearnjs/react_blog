import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './container/Layout/Layout';
import Posts from './container/Posts/Posts';
import User from './container/User/User';

const app = () => (
	<Layout>
		<Route exact path="/" component={Posts} />
		<Route path="/user/:userName" component={User} />
	</Layout>
);

export default app;