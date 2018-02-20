import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './container/Layout/Layout';
import Posts from './container/Posts/Posts';

const app = () => (
	<Layout>
		<Route exact path="/" component={Posts} />
		<Route path="/other" render={() => <div>Other</div>} />
	</Layout>
);

export default app;
