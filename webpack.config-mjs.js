module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    app: [
      "./app.mjs"
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.mjs"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
