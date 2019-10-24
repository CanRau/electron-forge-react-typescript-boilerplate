const path = require('path')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
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
  plugins: [
    // https://typeorm.io/#/faq/how-to-use-webpack-for-the-backend
    //ignore the drivers you don't want. This is the complete list of all drivers -- remove the suppressions for drivers you want to use.
    new FilterWarningsPlugin({
      // prettier-ignore
      exclude: [/mongodb/, /mssql/, /mysql/, /mysql2/, /oracledb/, /pg/, /pg-native/, /pg-query-stream/, /redis/, /sqlite3/]
    }),
    ...plugins,
  ],

  // for https://typeorm.io/#/faq/bundling-migration-files
  optimization: {
    minimize: false,
  },
}
