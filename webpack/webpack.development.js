const webpack = require('webpack')
const {merge} = require('webpack-merge')
const StylelintPlugin = require('stylelint-webpack-plugin')
const base = require('./webpack.base')
const paths = require('./paths')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 4040
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {sourceMap: true, importLoaders: 1, modules: true}
          },
          {loader: 'postcss-loader', options: {sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}}
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new StylelintPlugin()]
})
