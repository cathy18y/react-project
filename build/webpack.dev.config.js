/**
 * packgae.json: devDependencies
 * eslint config: import/no-extraneous-dependencies
 * * */

const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const HtmlWebapckPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.config');

base.plugins = _.concat(base.plugins, [
  new HtmlWebapckPlugin({
    template: './build/index.html',
  }),
  new webpack.HotModuleReplacementPlugin()],
);

base.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
}, {
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    'less-loader',
  ],
}, {
  test: /\.scss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[local]_[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
});

const devConfig = {
  mode: 'development',
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'statis/js/[name].js',
  },
};

module.exports = _.assignIn(devConfig, base);

