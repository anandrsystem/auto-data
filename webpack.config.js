const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundlefile.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         localIdentName: '[hash:base64:5][path]-[local]'
      //       }
      //     },
      //     { loader: 'resolve-url-loader' },
      //     {
      //       loader: 'saas-loader',
      //       options: {
      //         sourceMap: true,
      //         data: '@import "config-styles";',
      //         includePaths: [
      //           path.join(__dirname, '..', '/src/configs')
      //         ]
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}