const path = require('path');

module.exports = {
  mode: "development", 
  entry: __dirname + "/client/index.jsx",
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: path.resolve(__dirname, "/node_modules"),
        use: {
          loader: "babel-loader", 
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
}