const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");


let usedPlugins = [
  new MinifyPlugin({
    "removeConsole": true
  }, {})
];
if (process.env.DEPLOY !== "1") {
  usedPlugins = [];
  console.log('making js as Dev mode...');
}else{
  console.log('making js as Deploy mode...');
}

module.exports = {
  entry: './src/js/test.js',
  output: {
    path: `${__dirname}/test/`,
    filename: 'test.js'
  },
  plugins: usedPlugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};


