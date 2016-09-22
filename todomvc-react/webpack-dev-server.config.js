var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        'webpack/hot/only-dev-server',
        "./temp/index"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },    
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "source-map-loader"
        }],
        loaders: [{
            loader: "style-loader!css-loader",
            test: /\.css$/
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "react-hot-loader"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()    
    ],
    devServer: {
        hot: true,
        contentBase: "./",
        publicPath: "/",
        historyApiFallback: true
    }
}
