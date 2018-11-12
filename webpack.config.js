const path = require('path');

module.exports = {
  entry: './src/index',

  devtool: 'inline-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      { 
        test: /\.(js)x?$/,
        loader: 'babel-loader',
         exclude: /node_modules/
      },
      {
        test: /\.(ts)x?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }],
  },
};
