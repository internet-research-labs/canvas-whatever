module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'svv.im.bundled.js',
    publicPath: '/assets/',
    externals: ['Ayy', 'RegularTriangle'],
    libraryTarget: 'var',
    library: 'svv',
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
