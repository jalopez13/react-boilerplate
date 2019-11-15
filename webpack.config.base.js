const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),

  output: {
    filename: 'main.js',
    publicPath: '/',
    path: resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Start coding mang...',
      filename: 'index.html',
      template: resolve(__dirname, 'src', 'index.html')
    })
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      src: resolve(__dirname, 'src')
    }
  },

  devServer: {
    contentBase: resolve(__dirname, 'dist')
  }
};
