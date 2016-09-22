module.exports = {
    devtool: "source-map",
    entry: "./temp/index",
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
        }]
    }
};
