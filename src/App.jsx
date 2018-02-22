import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer/MainContainer';
import UserContainer from './containers/UserContainer/UserContainer';
import Aux from './containers/Auxiliary/Auxiliary';

const app = () => (
	<Aux>
		<Route exact path="/" component={MainContainer} />
		<Route path="/user/:userName" component={UserContainer} />
	</Aux>
);

export default app;