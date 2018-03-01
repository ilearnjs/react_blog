const path = require('path');

module.exports = {
	entry: `${__dirname}/src/index.js`,

	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js',
		publicPath: '/'
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: /src/,
				loader: 'babel-loader'
			},
		],
	},
};