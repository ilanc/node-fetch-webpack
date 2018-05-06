module.exports = {
  target: 'node',
  entry: {
    app: [
      "./app.js"
    ]
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
