const _ = require('lodash');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const base = require('./webpack.base.config');

const outputPath = path.join(__dirname, '../dist');

base.plugins = _.concat(base.plugins, [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
]);

base.module.rules.push(
  {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
    ],
  },
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin,
      'css-loader',
      'less-loader',
    ],
  },
  {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
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
  },
);

module.exports = _.extend({
  mode: 'production',
  entry: {
    vendor: [
      'babel-polyfill',
      'lodash',
      'moment',
      'date-fns',
    ],
    app: './src/index',
  },
  output: {
    path: outputPath,
    filename: 'statis/js/[name]_[chunkhash].js',
    publicPath: '/',
  },
}, base);
