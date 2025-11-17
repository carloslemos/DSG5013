const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    watchFiles: ['src/**/*']
  },

  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@js': path.resolve(__dirname, 'src/js/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@assets': path.resolve(__dirname, 'src/assets/')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html'
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/data', to: 'data' }
      ]
    }),

    new webpack.HotModuleReplacementPlugin()
  ]
};