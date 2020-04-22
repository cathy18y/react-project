const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
  contentBase: 'build/',
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  clientLogLevel: 'warning',
  stats: config.stats,
}).listen(8082, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8082/');
});

