import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router'
import App from './App'

// initialize the server and configure support for ejs templates
const app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static('./dist'));

// universal routing and rendering
app.get('*', (req, res) => {
	const context = {}

	const markup = renderToString(
		<StaticRouter
			location={req.url}
			context={context}
		>
			<App />
		</StaticRouter>
	)

	if (context.url) {
		res.writeHead(301, {
			Location: context.url
		})
		res.end()
	} else {
		return res.render('index', { markup });
	}
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
	if (err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`);
});
