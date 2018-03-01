import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const app = (
	<BrowserRouter>
		<App />
	</ BrowserRouter>
);
hydrate(app, document.getElementById('root'));