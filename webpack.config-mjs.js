module.exports = {
  target: 'node',
  entry: {
    app: [
      "./app.mjs"
    ]
  },
  output: {
    filename: "bundle.mjs"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
