const browserEnv = require('browser-env');
const hook = require('vue-node');
const path = require('path');

hook(path.join(__dirname, 'webpack.config.test.js'));

browserEnv();
