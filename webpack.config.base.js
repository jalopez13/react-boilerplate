const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),

  output: {
    filename: 'main.js',
    publicPath: '/',
    path: resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Let's get coding!",
      filename: 'index.html',
      template: resolve(__dirname, 'src', 'index.html')
    })
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    contentBase: resolve(__dirname, 'dist')
  } 
};