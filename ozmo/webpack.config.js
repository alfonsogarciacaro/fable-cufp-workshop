module.exports = {
  devtool: "source-map",
  entry: "./temp/ozmo.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "source-map-loader"
    }]
  }
};
