const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	devServer: {
		port: 4200,
	},
	plugins: [
		new SourceMapDevToolPlugin({
			filename: '[file].map',
		}),
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HTMLPlugin({
			template: './src/index.html',
		}),
	],
};
