var webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: `${__dirname}/assets/`,
    filename: 'app.js',
    publicPath: 'http://localhost:8080/assets/'
  },
  module: {
    loaders: [
      { test: /\.jsx$|\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel"]},
      { test: /\.json$/, exclude: /node_modules/, loader: "json" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
