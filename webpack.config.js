var webpack = require('webpack');
var path = require('path');
var dotenv = require('dotenv')


module.exports = () => {
	const env = dotenv.config().parsed

	const envKeys = Object.keys(env).reduce((keysObj, key) => {
		keysObj[`ENV.${key}`] = JSON.stringify(env[key])
		return keysObj
	}, {})

	return {
		entry: {
			app: "./src/app.js"
		},
		devServer: {
			contentBase: "./build",
			hot: true
		},
		output: {
			filename: "build/index.js",
			sourceMapFilename: "build/bundle.map"
		},
		devtool: "#source-map",
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015']
					}
				},
				{
					test: /\.css$/,
					loader: "style-loader!css-loader"
				},
				{
					test: /\.(?:png|jpg|jpeg|svg|mp4)$/,
					loader: 'url-loader'
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin(envKeys)
		]
	} // end of webpack config
}
