const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true // set to true if you want JS source maps
    }),]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: [/\.jsx?$/],
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: path.resolve(__dirname, '/node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            compact: true,
          },
        },
      },
    ],
  },
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};
