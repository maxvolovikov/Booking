'use strict'
const path = require('path')
// const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (env) => {
  console.log('WEBPACK ENV:', env)

  // VARIABLES
  const isProduction = env === 'production'
  const isDev = env === 'development'

  //// PLUGGINS ////

  // cleans 'dist' folder everytime before a new build
  const CleanPLugin = new CleanWebpackPlugin(['dist'], {
    root: __dirname,
    verbose: true,
    dry: false
  })


  const CompressPlugin = new CompressionPlugin({
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })

  const AnalyzerPlugin = new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  })

  const HTMLPlugin = new HtmlWebpackPlugin({
    template: 'template.html',
    chunksSortMode: 'none'
  })

  // BUILDING WEBPACK
  const config = {}

  config.entry = ['babel-polyfill', '/client/index.jsx']

  config.output = {
    path: path.join(__dirname, '/public/index.jsx'),
    filename: 'bundle.js'
  }

  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          mangle: false,
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ]
  }

  config.plugins = [ AnalyzerPlugin, HTMLPlugin, CompressPlugin]

  config.module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            compact: true,
          },
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  }

  config.resolve = {
    extensions: ['.js', '.jsx']
  }

  if (isProduction) {
    config.output = {
      path: path.join(__dirname, '/public'),
      publicPath: '/',
      chunkFilename: '[name].[chunkhash].bundle.js',
      filename: '[name].[chunkhash].bundle.js'
    }
    config.mode = 'production'
    config.devtool = 'source-map'
  }

  if (isDev) {
    config.output = {
      path: path.join(__dirname, '/public'),
      chunkFilename: '[name].bundle.js',
      filename: '[name].bundle.js'
    }

    config.mode = 'development'
    config.devtool = 'inline-source-map'

    config.devServer = {
      contentBase: path.join(__dirname, '/public'),
      historyApiFallback: true
    }
  }

  return config
}