const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/dev',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './src/dev',
    hot: true,
    compress: true,
    stats: {
      colors: true,
      assets: true,
      chunks: false,
      modules: false,
      hash: false
    },
    historyApiFallback: {
      index: 'index.html'
    }
  },
  node: {
    fs: 'empty'
  }
};
