module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    app: [
      "./app.js"
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
