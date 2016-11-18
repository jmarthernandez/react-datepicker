const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  datepicker: path.join(__dirname, 'src/Datepicker.js'),
  example: path.join(__dirname, 'src/example.js'),
};

const common = {
  entry: {
    datepicker: PATHS.datepicker,
    example: PATHS.example,
  },
  output: {
    filename: '[name].build.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
      { test: /\.js$/, loaders: ['eslint-loader'] },
    ],
    preloaders: [
      { test: /\.js$/, loaders: ['eslint-loader'] },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};

// minifies and uses production builds for react and redux
if (TARGET === 'start') {
  common.devtool = 'eval-source-map';
} else if (TARGET === 'production') {
  common.plugins.push(new webpack.optimize.UglifyJsPlugin());
  common.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }));
}

module.exports = common;
