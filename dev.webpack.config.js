const merge = require('webpack-merge');
const common =  require('./base.webpack.config');
const dotenv = require('dotenv-webpack');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new dotenv({
      path: './dev.env',
    })
  ]
});