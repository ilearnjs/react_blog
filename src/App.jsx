import React from 'react';
import { Route, Link } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import Aux from './containers/Auxiliary/Auxiliary';

const app = (props) => {
	return (
		<Aux>
			<div className="header">
				<Link className="link" to="/login">Log in</Link>
				{/* <Link className="link" to="/signup">Sign up</Link> */}
			</div>
			{(renderRoutes(props.route.routes))}
		</Aux>
	);
};

export default app;