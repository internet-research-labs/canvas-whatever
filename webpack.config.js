module.exports = {
  entry: './src/index.js',
  output: {
    path: './docs',
    filename: 'svv.im.bundled.js',
    publicPath: '/assets/',
    // externals: ['RegularTriangle'],
    libraryTarget: 'var',
    library: 'svv',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  externals: {
    "THREE": "THREE",
    "react": "React",
  },
};
