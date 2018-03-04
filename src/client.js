import './styles.css';

import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducer from './reducers/index';
import App from './App';

const store = createStore(reducer, undefined, applyMiddleware(thunk));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</ BrowserRouter>
	</Provider>
);
if (CLIENT_MODE) {
	render(app, document.getElementById('root'));
} else {
	hydrate(app, document.getElementById('root'));
}
