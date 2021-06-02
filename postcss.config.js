const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    cssnano({
      preset: 'default'
    }),
    postcssPresetEnv({ browsers: 'last 2 versions', autoprefixer: { grid: true } })
  ]
}
