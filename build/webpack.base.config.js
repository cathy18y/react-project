const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.join(__dirname, '../dist');

module.exports = {
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, '../src'),
      path.join(__dirname, '../node_modules'),
    ],
    alias: {
      '@': path.join(__dirname, '../src'),
      testcom: path.join(__dirname, '../src/components'),
    },
  },

  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      include: path.join(__dirname, '../src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime',
            [
              'react-css-modules',
              {
                context: path.resolve(__dirname, '..'),
                generateScopedName: '[local]_[hash:base64:5]',
                filetypes: {
                  '.scss': { syntax: 'postcss-scss' },
                },
              },
            ],
          ],
        },
      }, {
        loader: 'imports-loader',
        options: {
          $: 'jquery',
        },
      }],
    }],
  },

  plugins: [
    // static path
    // new CopyWebpackPlugin([{
    //   from: path.join(__dirname, '../static'),
    //   to: 'static',
    // }]),

    // provide plugin
    new webpack.ProvidePlugin({
      _: 'lodash',
      moment: 'moment',
    }),

    // Extract CSS
    new MiniCssExtractPlugin({
      path: outputPath,
      filename: 'statis/css/[name].css',
    }),
  ],

  stats: {
    // Add asset Information
    assets: false,
    // Sort assets by a field
    assetsSort: 'field',
    // Add information about cached (not built) modules
    cached: true,
    // Add children information
    children: false,
    // Add chunk information (setting this to `false` allows for a less verbose output)
    chunks: false,
    // Add built modules information to chunk information
    chunkModules: false,
    // Add the origins of chunks and chunk merging info
    chunkOrigins: false,
    // Sort the chunks by a field
    chunksSort: 'field',
    // Context directory for request shortening
    context: path.resolve('./src/'),
    // `webpack --colors` equivalent
    colors: true,
    // Add errors
    errors: true,
    // Add details to errors (like resolving log)
    errorDetails: true,
    // Add the hash of the compilation
    hash: true,
    // Add built modules information
    modules: false,
    // Sort the modules by a field
    modulesSort: 'field',
    // Add public path information
    publicPath: true,
    // Add information about the reasons why modules are included
    reasons: false,
    // Add the source code of modules
    source: false,
    // Add timing information
    timings: false,
    // Add webpack version information
    version: true,
    // Add warnings
    warnings: true,
  },
};
