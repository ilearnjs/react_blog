const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: path.join(__dirname, 'src/client/index.html'),
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	entry: path.join(__dirname, 'src/client/index.js'),
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
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2017'],
				},
			},
		],
	},
	plugins: [HtmlWebpackPluginConfig],
};
