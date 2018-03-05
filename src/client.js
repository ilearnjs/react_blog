import './styles.css';

import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { renderRoutes } from "react-router-config";

import routes from './routes';
import reducer from './reducers/index';
import App from './App';

console.log('Ser init state:', window.__INITIAL_STATE__);
const store = createStore(reducer, window.__INITIAL_STATE__, applyMiddleware(thunk));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			{renderRoutes(routes)}
		</ BrowserRouter>
	</Provider>
);
if (CLIENT_MODE) {
	render(app, document.getElementById('root'));
} else {
	hydrate(app, document.getElementById('root'));
}