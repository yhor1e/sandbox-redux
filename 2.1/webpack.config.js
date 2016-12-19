module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: '.'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['jsx']
    }]
  }
}
