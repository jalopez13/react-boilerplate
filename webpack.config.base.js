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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: [
                  'last 2 versions', 
                  'not dead',
                  'not < 2%',
                  'not ie 11'
                ],
                useBuiltIns: 'entry'
              }],
              '@babel/preset-react' 
            ],
            plugins: [
              'babel-plugin-transform-class-properties',
              '@babel/plugin-transform-arrow-functions',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
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
      title: 'Start coding mang...',
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