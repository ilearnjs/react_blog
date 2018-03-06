import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { matchRoutes, renderRoutes } from 'react-router-config';

import reducer from './reducers/index';
import App from './App'
import routes from './routes';
import { ssr } from './reducers/main';

const app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static('./dist', { index: false }));

app.get('*', (req, res) => {
	const store = createStore(reducer, applyMiddleware(thunk));
	const branch = matchRoutes(routes, req.url);
	const promises = branch.map(({ route, match }) => {
		let ssrAction = route.component.ssrAction;
		return ssrAction instanceof Function ? ssrAction(store, match) : Promise.resolve();
	});
	return Promise.all(promises).then((data) => {
		const context = {};
		const markup = renderToString(
			<Provider store={store}>
				<StaticRouter
					location={req.url}
					context={context}
				>
					{renderRoutes(routes)}
				</StaticRouter>
			</Provider>
		);

		if (context.url) {
			res.writeHead(301, {
				Location: context.url
			});
			res.end();
		} else {
			res.render('index', { data: store.getState(), markup });
		}
	});
});

app.listen(8080, err => {
	if (err) {
		return console.error(err);
	}
});
