const path = require('path')
const plugins = require('./webpack.plugins')
const rules = require('./webpack.rules')

function srcPaths(src) {
  return path.join(__dirname, src)
}

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

module.exports = {
  resolve: {
    alias: {
      '@': srcPaths('src'),
      '@main': srcPaths('src/main'),
      '@renderer': srcPaths('src/renderer'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins,
}
