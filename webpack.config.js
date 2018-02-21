const path = require('path');


module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js',
	},
	watch: false,
	watchOptions: {
		aggregateTimeout: 100,
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: /src/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'es2017', 'stage-0', 'react'],
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		contentBase: './src',
		historyApiFallback: true,
		publicPath: '/',
	},
};