import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducer from './reducers/index';
import App from './App'

const app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static('./dist', { index: false }));

app.get('*', (req, res) => {
	const context = {};
	const store = createStore(reducer, undefined, applyMiddleware(thunk));
	const markup = renderToString(
		<Provider store={store}>
			<StaticRouter
				location={req.url}
				context={context}
			>
				<App />
			</StaticRouter>
		</Provider>
	);

	if (context.url) {
		res.writeHead(301, {
			Location: context.url
		});
		res.end();
	} else {
		res.render('index', { markup });
	}
});

app.listen(8080, err => {
	if (err) {
		return console.error(err);
	}
});
 