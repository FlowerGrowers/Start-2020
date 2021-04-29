const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      exclude: /node_module/,
    }),
  ],
  performance: {
    hints: 'error',
  },
});
