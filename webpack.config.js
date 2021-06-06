const webpackConfigClient = require('./webpack.client.config');
const webpackConfigServer = require('./webpack.server.config');

module.exports = [webpackConfigClient, webpackConfigServer];
