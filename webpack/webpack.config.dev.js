const path = require('path');
const webpack = require('webpack');
const projectRootPath = path.resolve(__dirname, '..');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(projectRootPath, 'src', 'client.tsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(projectRootPath, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
