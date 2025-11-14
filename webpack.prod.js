const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),

    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
};