module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'svv.im.bundled.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
