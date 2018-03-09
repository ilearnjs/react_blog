import React from 'react';
import { renderRoutes } from "react-router-config";

import Aux from './containers/Auxiliary/Auxiliary';
import NavigationContainer from './containers/NavigationContainer/NavigationContainer';

const app = (props) => {
	return (
		<Aux>
			<NavigationContainer />
			{(renderRoutes(props.route.routes))}
		</Aux>
	);
};

export default app;