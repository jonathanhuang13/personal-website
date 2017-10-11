const path = require('path');
const projectRootPath = path.resolve(__dirname, '..');

module.exports = {
  entry: path.resolve(projectRootPath, 'src', 'client.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(projectRootPath, 'dist')
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
  }
};
