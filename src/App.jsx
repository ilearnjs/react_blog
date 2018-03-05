import React from 'react';
import { Route } from 'react-router-dom';
import { renderRoutes } from "react-router-config";

const app = (props) => {
	return renderRoutes(props.route.routes);
};

export default app;