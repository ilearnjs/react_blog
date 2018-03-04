import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles.css';

const app = (
	<BrowserRouter>
		<App />
	</ BrowserRouter>
);
if (CLIENT_MODE) {
	render(app, document.getElementById('root'));
} else {
	hydrate(app, document.getElementById('root'));
}
