
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: `${__dirname}/src/client.js`,

	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js',
		publicPath: '/',
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
			{
				test: /\.css$/,
				use: [{
					loader: "style-loader",
				}, {
					loader: "css-loader",
				}],
			},
		],
	},

	plugins: [
		new webpack.DefinePlugin({
			'CLIENT_MODE': JSON.stringify(process.env.CLIENT_MODE)
		}),
		new HtmlWebpackPlugin({
			template: `${__dirname}/src/index.html`
		}),
	],
};