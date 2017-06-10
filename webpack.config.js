const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{

      test: /\.sass$/,
      use: ExtractTextPlugin.extract({

        use: [
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      })

    }, {
      test: /\.(png|svg)/,
      loader: 'file-loader',
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [HtmlWebpackPluginConfig,
    new ExtractTextPlugin('styles.css'),
  ],
}
