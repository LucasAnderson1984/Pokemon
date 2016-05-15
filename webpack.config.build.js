module.exports = {
  entry: './src/client/index.js',
  output: {
    path: `${__dirname}/public/`,
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$|\.js$/, exclude: /node_modules/, loader: "babel"},
      { test: /\.json$/, exclude: /node_modules/, loader: "json" }
    ]
  }
}
