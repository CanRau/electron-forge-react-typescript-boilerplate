const path = require('path')
const plugins = require('./webpack.plugins')

function srcPaths(src) {
  return path.join(__dirname, src)
}

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main/main.ts',
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
    rules: require('./webpack.rules'),
  },
  plugins,
}
