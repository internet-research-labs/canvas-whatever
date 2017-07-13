module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    path: __dirname + '/docs',
    filename: 'svv.im.bundled-okay.js',
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
